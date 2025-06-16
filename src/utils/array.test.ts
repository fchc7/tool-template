import { describe, it, expect } from 'vitest';
import { unique, chunk, shuffle, intersection, difference } from './array';

describe('Array Utils', () => {
  describe('unique', () => {
    it('should remove duplicates from array', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
      expect(unique(['a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    it('should handle empty array', () => {
      expect(unique([])).toEqual([]);
    });

    it('should handle array with no duplicates', () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('chunk', () => {
    it('should chunk array into smaller arrays', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk([1, 2, 3, 4], 2)).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });

    it('should handle edge cases', () => {
      expect(chunk([], 2)).toEqual([]);
      expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    it('should throw error for invalid chunk size', () => {
      expect(() => chunk([1, 2, 3], 0)).toThrow(
        'Chunk size must be greater than 0'
      );
      expect(() => chunk([1, 2, 3], -1)).toThrow(
        'Chunk size must be greater than 0'
      );
    });
  });

  describe('shuffle', () => {
    it('should return array with same length', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle(arr);
      expect(shuffled).toHaveLength(arr.length);
    });

    it('should contain all original elements', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle(arr);
      expect(shuffled.sort()).toEqual(arr.sort());
    });

    it('should not modify original array', () => {
      const arr = [1, 2, 3, 4, 5];
      const original = [...arr];
      shuffle(arr);
      expect(arr).toEqual(original);
    });
  });

  describe('intersection', () => {
    it('should find common elements', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
      expect(intersection(['a', 'b'], ['b', 'c'])).toEqual(['b']);
    });

    it('should handle no intersection', () => {
      expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    it('should handle empty arrays', () => {
      expect(intersection([], [1, 2])).toEqual([]);
      expect(intersection([1, 2], [])).toEqual([]);
    });
  });

  describe('difference', () => {
    it('should find different elements', () => {
      expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
      expect(difference(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c']);
    });

    it('should handle no difference', () => {
      expect(difference([1, 2], [1, 2, 3])).toEqual([]);
    });

    it('should handle empty arrays', () => {
      expect(difference([], [1, 2])).toEqual([]);
      expect(difference([1, 2], [])).toEqual([1, 2]);
    });
  });
});
