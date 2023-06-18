import { FixedRadiusNearestNeighbours2 } from "../neighbours";
import { Vec2 } from "../vector";

describe.only("FixedRadiusNearestNeighbours2", () => {
  test("test test", () => {
    const points = [
      new Vec2(0.3, 0.1),
      new Vec2(1.2, 1.4),
      new Vec2(0.9, 3.4),
      new Vec2(9.8, 10.8),
      new Vec2(5.2, 6.8),
      new Vec2(8.3, 4.2),
    ];

    const neighbours = new FixedRadiusNearestNeighbours2(points, 2);
    const nearest = neighbours.findNearestN(new Vec2(0.5, 1), 2);
  });
});
