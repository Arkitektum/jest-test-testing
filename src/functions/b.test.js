import {describe, expect, test} from '@jest/globals';
import {sum} from './b';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 10 + 0 to equal 10', () => {
    expect(sum(10, 0)).toBe(10);
  });
  test('subtrack 4 from 10 to equal 6', () => {
    expect(sum(10, -4)).toBe(6);
  });
});