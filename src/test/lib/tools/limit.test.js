import { Limits } from '../../../lib/tools/limit';

describe('Test functionalIamge ', () => {
  ['2x2', '22x22', '1x99'].forEach((matrix) => {
    test(`${matrix} is correct`, () => {
      const limits = new Limits(2, 10, matrix);
      expect(limits.defined()).toBe(true);
    });
  });
  ['x2', '2x', 'abc', 'xxx', 'xx', '99x'].forEach((matrix) => {
    test(`${matrix} is wrong`, () => {
      const limits = new Limits(2, 10, matrix);
      expect(limits.defined()).toBe(false);
    });
  });

  const min = 3;

  const max = 5;
  for (let i = min; i <= max; i++) {
    for (let n = min; n <= max; n++) {
      const matrix = `${i}x${n}`;
      test(`${i}x${n} does not exceed`, () => {
        const limits = new Limits(min, max, matrix);
        expect(limits.exceeded()).toBe(false);
      });
    }
  }

  for (let i = min - 2; i <= min; i++) {
    for (let n = max + 1; n <= max + 3; n++) {
      test(`${i}x${n} does  exceed`, () => {
        const matrix = `${i}x${n}`;
        const limits = new Limits(min, max, matrix);
        expect(limits.exceeded()).toBe(true);
      });
    }
  }
});
