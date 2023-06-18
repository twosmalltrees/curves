import { Vec2 } from "./vector";

// https://rtouti.github.io/graphics/perlin-noise-algorithm
export class Noise2 {
  static VEC_UP_RIGHT = new Vec2(1, 1);
  static VEC_UP_LEFT = new Vec2(-1, 1);
  static VEC_DOWN_RIGHT = new Vec2(1, -1);
  static VEC_DOWN_LEFT = new Vec2(-1, -1);

  private permutationTable: number[];

  constructor(
    readonly random: () => number = Math.random,
    readonly fade: (t: number) => number = Noise2.standardFade,
    readonly size: number = 256
  ) {
    this.generatePermutationTable();
  }

  public perlin(point: Vec2) {
    const { x, y } = point;
    const gridX = Math.floor(x) & (this.size - 1);
    const gridY = Math.floor(y) & (this.size - 1);

    const offsetX = x - Math.floor(x);
    const offsetY = y - Math.floor(y);

    const pointVec = new Vec2(offsetX, offsetY);

    const fromTopLeft = pointVec.sub(new Vec2(0, 1));
    const fromTopRight = pointVec.sub(new Vec2(1, 1));
    const fromBottomRight = pointVec.sub(new Vec2(1, 0));
    const fromBottomLeft = new Vec2(pointVec.x, pointVec.y);

    const valueTopRight =
      this.permutationTable[this.permutationTable[gridX + 1] + gridY + 1];
    const valueTopLeft =
      this.permutationTable[this.permutationTable[gridX] + gridY + 1];
    const valueBottomRight =
      this.permutationTable[this.permutationTable[gridX + 1] + gridY];
    const valueBottomLeft =
      this.permutationTable[this.permutationTable[gridX] + gridY];

    const dotTopLeft = fromTopLeft.dot(this.getConstVector(valueTopLeft));
    const dotTopRight = fromTopRight.dot(this.getConstVector(valueTopRight));
    const dotBottomLeft = fromBottomLeft.dot(
      this.getConstVector(valueBottomLeft)
    );
    const dotBottomRight = fromBottomRight.dot(
      this.getConstVector(valueBottomRight)
    );

    const interpFactorX = this.fade(offsetX);
    const interpFactorY = this.fade(offsetY);

    return this.lerp(
      interpFactorX,
      this.lerp(interpFactorY, dotBottomLeft, dotTopLeft),
      this.lerp(interpFactorY, dotBottomRight, dotTopRight)
    );
  }

  private getConstVector(v: number) {
    return [
      Noise2.VEC_UP_RIGHT,
      Noise2.VEC_UP_LEFT,
      Noise2.VEC_DOWN_RIGHT,
      Noise2.VEC_DOWN_LEFT,
    ][v & 3];
  }

  private generatePermutationTable() {
    this.permutationTable = Array(this.size)
      .fill(0)
      .map((_, i) => i);
    this.shuffle(this.permutationTable);

    this.permutationTable.push(...this.permutationTable);
  }

  // Fade function, https://adrianb.io/2014/08/09/perlinnoise.html
  // used to smooth transitions between constant vectors
  private static standardFade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(t: number, a: number, b: number) {
    return a + (b - a) * t;
  }

  // Fisher Yates shuffle, lifted from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array/6274381#6274381
  // Note, extract into utility function, will be useful elsewhere.
  private shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(this.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
