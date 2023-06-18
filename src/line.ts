import { Vec2 } from "./vector";

// Represents an unbounded line. For a bounded line, see LineSegment.
export class Line2 {
  constructor(readonly p1: Vec2, readonly p2: Vec2) {}

  distanceFromPoint(test: Vec2) {
    return (
      Math.abs(
        (this.p2.x - this.p1.x) * (this.p1.y - test.y) -
          (this.p1.x - test.x) * (this.p2.y - this.p1.y)
      ) / this.p1.distanceTo(this.p2)
    );
  }

  includesPoint(test: Vec2) {
    return this.distanceFromPoint(test) === 0;
  }
}

export class LineSegment2 {
  constructor(readonly p1: Vec2, readonly p2: Vec2) {}

  get length() {
    return this.p1.distanceTo(this.p2);
  }
}
