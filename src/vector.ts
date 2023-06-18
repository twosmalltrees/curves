export class Vec2 {
  constructor(readonly x: number, readonly y: number) {}

  toString() {
    return `[${this.x},${this.y}]`;
  }

  get magnitude(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  get unit(): Vec2 {
    return this.div(this.magnitude);
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

  div(scalar: number): Vec2 {
    const x = this.x / scalar;
    const y = this.y / scalar;
    return new Vec2(x, y);
  }

  dot(vec: Vec2): number {
    return this.x * vec.x + this.y * vec.y;
  }

  // Reuturn the vector that joins from a -> b
  to(vec: Vec2): Vec2 {
    return vec.sub(this);
  }

  distanceTo(vec: Vec2): number {
    return Vec2.distanceBetween(this, vec);
  }

  static distanceBetween(vec1: Vec2, vec2: Vec2): number {
    const diff = vec1.sub(vec2);
    return diff.magnitude;
  }

  static unitX() {
    return new Vec2(1, 0);
  }

  static unitY() {
    return new Vec2(0, 1);
  }
}

export class Vec3 {
  constructor(readonly x: number, readonly y: number, readonly z: number) {}

  get magnitude(): number {
    return Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
    );
  }

  get unit(): Vec3 {
    return this.div(this.magnitude);
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

  div(scalar: number): Vec3 {
    const x = this.x / scalar;
    const y = this.y / scalar;
    const z = this.z / scalar;
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

  distanceTo(vec: Vec3): number {
    return Vec3.distanceBetween(this, vec);
  }

  // Reuturn the vector that joins from a -> b
  to(vec: Vec3): Vec3 {
    return vec.sub(this);
  }

  static distanceBetween(vec1: Vec3, vec2: Vec3): number {
    const diff = vec1.sub(vec2);
    return diff.magnitude;
  }

  static unitX() {
    return new Vec3(1, 0, 0);
  }

  static unitY() {
    return new Vec3(0, 1, 0);
  }

  static unitZ() {
    return new Vec3(0, 0, 1);
  }
}
