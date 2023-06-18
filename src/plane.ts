import { Vec2, Vec3 } from "./vector";

export class Plane {
  constructor(readonly p0: Vec3, readonly p1: Vec3, readonly p2: Vec3) {}

  get normal(): Vec3 {
    const p0_p1 = this.p0.to(this.p1);
    const p0_p2 = this.p0.to(this.p2);
    return p0_p1.cross(p0_p2).unit;
  }

  get gradient(): Vec2 {
    return new Vec2(this.normal.x, this.normal.y);
  }

  // Vector in the direction of steepest ascent of the slope.
  // magnitude gives the "slope", effectively the projection
  // onto the z axis
  get ascentVector(): Vec3 {
    return this.normal.cross(Vec3.unitZ()).cross(this.normal);
  }

  // Same as above, but inverse, for convenience
  get descentVector(): Vec3 {
    return this.ascentVector.mul(-1);
  }
}
