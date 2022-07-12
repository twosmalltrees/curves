export class Vec2 {
  constructor(readonly x: number, readonly y: number) {}

  get magnitude(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  add(vec: Vec2): Vec2 {
    const x = this.x + vec.x;
    const y = this.y + vec.y;
    return new Vec2(x, y);
  }

  sub(vec: Vec2): Vec2 {
    const x = this.x - vec.x;
    const y = this.y - vec.y;
    return new Vec2(x, y);
  }

  mul(scalar: number): Vec2 {
    const x = this.x * scalar;
    const y = this.y * scalar;
    return new Vec2(x, y);
  }

  dot(vec: Vec2) {
    return this.x * vec.x + this.y * vec.y;
  }
}

export class Vec3 {
  constructor(readonly x: number, readonly y: number, readonly z: number) {}

  get magnitude(): number {
    return Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
    );
  }

  add(vec: Vec3): Vec3 {
    const x = this.x + vec.x;
    const y = this.y + vec.y;
    const z = this.z + vec.z;
    return new Vec3(x, y, z);
  }

  sub(vec: Vec3): Vec3 {
    const x = this.x - vec.x;
    const y = this.y - vec.y;
    const z = this.z - vec.z;
    return new Vec3(x, y, z);
  }

  mul(scalar: number): Vec3 {
    const x = this.x * scalar;
    const y = this.y * scalar;
    const z = this.z * scalar;
    return new Vec3(x, y, z);
  }

  dot(vec: Vec3): number {
    return this.x * vec.x + this.y * vec.y + this.z * vec.z;
  }

  cross(vec: Vec3) {
    const x = this.y * vec.z - this.z * vec.y;
    const y = this.z * vec.x - this.x * vec.z;
    const z = this.x * vec.y - this.y * vec.x;
    return new Vec3(x, y, z);
  }
}
