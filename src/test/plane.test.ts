import { Plane } from "../plane";
import { Vec3 } from "../vector";

describe("Plane", () => {
  test("gradient", () => {
    const a = new Vec3(10, 23, 7);
    const b = new Vec3(34, 19, 12);
    const c = new Vec3(18, 5, 8);

    const plane = new Plane(a, b, c);

    expect(plane.gradient.x.toFixed(4)).toEqual("0.2100");
    expect(plane.gradient.y.toFixed(4)).toEqual("0.0391");
  });
});
