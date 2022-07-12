import { Vec2, Vec3 } from "../vector";

describe("Vec2", () => {
  const VEC_2_1 = new Vec2(12, 15);
  const VEC_2_2 = new Vec2(4, 10);

  test("magnitude", () => {
    expect(VEC_2_1.magnitude).toEqual(19.209372712298546);
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
});

describe("Vec3", () => {
  const VEC_3_1 = new Vec3(12, 15, 4);
  const VEC_3_2 = new Vec3(4, 10, 8);

  test("magnitude", () => {
    expect(VEC_3_1.magnitude).toEqual(19.621416870348583);
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
});
