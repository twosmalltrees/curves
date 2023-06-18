import { Line2 } from "../line";
import { Vec2, Vec3 } from "../vector";

describe("Line2", () => {
  const vec1 = new Vec2(-7, 9);
  const vec2 = new Vec2(10, 9);
  const line = new Line2(vec1, vec2);
  const point = new Vec2(4, 6);

  test("distanceFromPoint", () => {
    expect(line.distanceFromPoint(point)).toEqual(3);
  });
});
