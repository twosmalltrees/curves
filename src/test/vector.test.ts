import { Vec2, Vec3 } from "../vector";

describe("Vec2", () => {
  const VEC_2_1 = new Vec2(12, 15);
  const VEC_2_2 = new Vec2(4, 10);

  test("magnitude", () => {
    expect(VEC_2_1.magnitude).toEqual(19.209372712298546);
  });

  test("unit", () => {
    const unit = VEC_2_1.unit;
    expect(unit.x.toFixed(4)).toEqual("0.6247");
    expect(unit.y.toFixed(4)).toEqual("0.7809");
    expect(unit.magnitude).toEqual(1);
  });

  test("addition", () => {
    const result = VEC_2_1.add(VEC_2_2);
    expect(result.x).toEqual(16);
    expect(result.y).toEqual(25);
  });

  test("subtraction", () => {
    const result = VEC_2_1.sub(VEC_2_2);
    expect(result.x).toEqual(8);
    expect(result.y).toEqual(5);
  });

  test("scalar multiplication", () => {
    const result = VEC_2_1.mul(5);
    expect(result.x).toEqual(60);
    expect(result.y).toEqual(75);
  });

  test("dot product", () => {
    expect(VEC_2_1.dot(VEC_2_2)).toEqual(198);
  });

  test("to", () => {
    const result = VEC_2_1.to(VEC_2_2);
    expect(result.x).toEqual(-8);
    expect(result.y).toEqual(-5);
  });

  test("distance", () => {
    const expectedDistance = "9.4340";
    expect(VEC_2_1.distanceTo(VEC_2_2).toFixed(4)).toEqual(expectedDistance);
    expect(Vec2.distanceBetween(VEC_2_1, VEC_2_2).toFixed(4)).toEqual(
      expectedDistance
    );
  });
});

describe("Vec3", () => {
  const VEC_3_1 = new Vec3(12, 15, 4);
  const VEC_3_2 = new Vec3(4, 10, 8);

  test("magnitude", () => {
    expect(VEC_3_1.magnitude).toEqual(19.621416870348583);
  });

  test("unit", () => {
    const unit = VEC_3_1.unit;
    expect(unit.x.toFixed(4)).toEqual("0.6116");
    expect(unit.y.toFixed(4)).toEqual("0.7645");
    expect(unit.z.toFixed(4)).toEqual("0.2039");
    expect(unit.magnitude).toEqual(1);
  });

  test("addition", () => {
    const result = VEC_3_1.add(VEC_3_2);
    expect(result.x).toEqual(16);
    expect(result.y).toEqual(25);
    expect(result.z).toEqual(12);
  });

  test("subtraction", () => {
    const result = VEC_3_1.sub(VEC_3_2);
    expect(result.x).toEqual(8);
    expect(result.y).toEqual(5);
    expect(result.z).toEqual(-4);
  });

  test("scalar multiplication", () => {
    const result = VEC_3_1.mul(5);
    expect(result.x).toEqual(60);
    expect(result.y).toEqual(75);
    expect(result.z).toEqual(20);
  });

  test("dot product", () => {
    expect(VEC_3_1.dot(VEC_3_2)).toEqual(230);
  });

  test("cross product", () => {
    const result = VEC_3_1.cross(VEC_3_2);
    expect(result.x).toEqual(80);
    expect(result.y).toEqual(-80);
    expect(result.z).toEqual(60);
  });

  test("to", () => {
    const result = VEC_3_1.to(VEC_3_2);
    expect(result.x).toEqual(-8);
    expect(result.y).toEqual(-5);
    expect(result.z).toEqual(4);
  });

  test("distance", () => {
    const expectedDistance = "10.2470";
    expect(VEC_3_1.distanceTo(VEC_3_2).toFixed(4)).toEqual(expectedDistance);
    expect(Vec3.distanceBetween(VEC_3_1, VEC_3_2).toFixed(4)).toEqual(
      expectedDistance
    );
  });
});
