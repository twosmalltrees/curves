import { Vec2 } from "./vector";

// 2D fixed radius nearest neighbours search
export class FixedRadiusNearestNeighbours2 {
  private integerLattice = new Map<string, Vec2[]>();
  private scaleFactor: number;

  constructor(readonly points: Vec2[], readonly radius: number) {
    this.scaleFactor = 1 / radius;
    this.buildLattice(points);
    console.log(this.integerLattice);
  }

  // Returns array of points of up to size n (but may be less)
  public findNearestN(point: Vec2, n: number): Vec2[] {
    const latticePoint = this.getLatticePoint(point);
    const neightbouringLatticePoints =
      this.findNeighbouringLatticePoints(latticePoint);

    const pointsToTest: Vec2[] = [
      ...(this.integerLattice.get(latticePoint.toString()) || []),
      ...(this.integerLattice.get(neightbouringLatticePoints.top.toString()) ||
        []),
      ...(this.integerLattice.get(
        neightbouringLatticePoints.topRight.toString()
      ) || []),
      ...(this.integerLattice.get(
        neightbouringLatticePoints.right.toString()
      ) || []),
      ...(this.integerLattice.get(
        neightbouringLatticePoints.bottomRight.toString()
      ) || []),
      ...(this.integerLattice.get(
        neightbouringLatticePoints.bottom.toString()
      ) || []),
      ...(this.integerLattice.get(
        neightbouringLatticePoints.bottomLeft.toString()
      ) || []),
      ...(this.integerLattice.get(neightbouringLatticePoints.left.toString()) ||
        []),
      ...(this.integerLattice.get(
        neightbouringLatticePoints.topLeft.toString()
      ) || []),
    ];

    console.log({ pointsToTest });

    function sortNearestFirst(p1, p2) {
      const distanceToP1 = point.distanceTo(p1);
      const distanceToP2 = point.distanceTo(p2);
      console.log({ distanceToP1, distanceToP2 });
      return distanceToP1 < distanceToP2 ? -1 : 1;
    }

    const sortedPoints = pointsToTest.sort(sortNearestFirst);

    return sortedPoints.slice(n - 1);
  }

  private buildLattice(points: Vec2[]) {
    points.forEach((point) => {
      const latticeKey = this.getLatticePoint(point).toString();
      const latticeKeyPointsArray = this.integerLattice.get(latticeKey);
      if (latticeKeyPointsArray) {
        latticeKeyPointsArray.push(point);
      } else {
        this.integerLattice.set(latticeKey, [point]);
      }
    });
  }

  private findNeighbouringLatticePoints(latticePoint: Vec2) {
    const top = new Vec2(latticePoint.x, latticePoint.y + 1);
    const topRight = new Vec2(latticePoint.x + 2, latticePoint.y + 2);
    const right = new Vec2(latticePoint.x + 1, latticePoint.y);
    const bottomRight = new Vec2(latticePoint.x + 1, latticePoint.y - 1);
    const bottom = new Vec2(latticePoint.x, latticePoint.y - 1);
    const bottomLeft = new Vec2(latticePoint.x - 1, latticePoint.y - 1);
    const left = new Vec2(latticePoint.x - 1, latticePoint.y);
    const topLeft = new Vec2(latticePoint.x - 1, latticePoint.y + 1);
    return {
      top,
      topRight,
      right,
      bottomRight,
      bottom,
      bottomLeft,
      left,
      topLeft,
    };
  }

  private getLatticePoint(point: Vec2) {
    const scaledPoint = point.mul(this.scaleFactor);
    return new Vec2(Math.round(scaledPoint.x), Math.round(scaledPoint.y));
  }
}
