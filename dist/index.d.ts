declare class Vec2 {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    get magnitude(): number;
    add(vec: Vec2): Vec2;
    subtract(vec: Vec2): Vec2;
    mul(scalar: number): Vec2;
    dot(vec: Vec2): number;
}
declare class Vec3 {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    constructor(x: number, y: number, z: number);
    get magnitude(): number;
    add(vec: Vec3): Vec3;
    subtract(vec: Vec3): Vec3;
    mul(scalar: number): Vec3;
    dot(vec: Vec3): number;
    cross(vec: Vec3): Vec3;
}
