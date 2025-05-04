import { merge } from '../src/index';

test('normal', () => {
    expect(merge([6,2,1], [3,4], [0,4,5])).toStrictEqual([0,1,2,3,4,4,5,6]);
  });

  test('empty array', () => {
    expect(merge([], [3,4], [4,5])).toStrictEqual([3,4,4,5]);
  });

  test('same value', () => {
    expect(merge([0,0], [0,0], [0,0])).toStrictEqual([0,0,0,0,0,0]);
  });
