import { oddMiddle } from '../../../lib/tools/middle';

describe('Test Middle of Odd Numbers', () => {
  test('Middle of even matrix must be -1', () => {
    expect(oddMiddle([2, 2])).toEqual(-1);
    expect(oddMiddle([4, 5])).toEqual(-1);
  });

  test('Middle of odd matrix [3,3] must be 4', () => {
    expect(oddMiddle([3, 3])).toEqual(4);
  });

  test('Middle of odd matrix [5,7] must be 17', () => {
    expect(oddMiddle([5, 7])).toEqual(17);
  });
});
