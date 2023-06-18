import { Noise2 } from "../noise";
import { Vec2 } from "../vector";

describe("Noise2", () => {
  test("produces repeatable output", () => {
    const pointToTest = new Vec2(31.2, 21.7);
    const expectedRandomOutput = 0.123;

    const random1 = jest.fn();
    random1.mockReturnValueOnce(expectedRandomOutput);
    const noise1 = new Noise2(random1);
    const result1 = noise1.perlin(pointToTest);

    const random2 = jest.fn();
    random2.mockReturnValueOnce(expectedRandomOutput);
    const noise2 = new Noise2(random1);
    const result2 = noise2.perlin(pointToTest);

    expect(result1).toEqual(result2);
  });
});
