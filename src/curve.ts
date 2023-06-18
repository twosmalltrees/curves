import { Vec2 } from "./vector";

export class Curve {
  readonly closed: boolean;
  readonly points: Array<Vec2>;
  readonly startControlPoint: Vec2;
  readonly endControlPoint: Vec2;

  constructor(points: Array<Vec2>, closed: boolean = false) {
    this.closed = closed;
    if (!this.closed) {
      // Not creating a closed loop.
      this.startControlPoint = points[0];
      this.endControlPoint = points[points.length - 1];
    } else {
      // Creating a closed loop, so push start point onto end.
      this.points = [...points, points[0]];

      // Start and end control points set to create continuity in curve at join
      this.startControlPoint = points[points.length - 1];
      this.endControlPoint = points[0];
    }
  }
}
