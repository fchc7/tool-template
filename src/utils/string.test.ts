import { describe, it, expect } from 'vitest';
import { camelToKebab, kebabToCamel, capitalize, truncate } from './string';

describe('String Utils', () => {
  describe('camelToKebab', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(camelToKebab('camelCase')).toBe('camel-case');
      expect(camelToKebab('thisIsATest')).toBe('this-is-a-test');
      expect(camelToKebab('HTML')).toBe('html');
    });

    it('should handle edge cases', () => {
      expect(camelToKebab('')).toBe('');
      expect(camelToKebab('a')).toBe('a');
      expect(camelToKebab('A')).toBe('a');
    });
  });

  describe('kebabToCamel', () => {
    it('should convert kebab-case to camelCase', () => {
      expect(kebabToCamel('kebab-case')).toBe('kebabCase');
      expect(kebabToCamel('this-is-a-test')).toBe('thisIsATest');
      expect(kebabToCamel('single')).toBe('single');
    });

    it('should handle edge cases', () => {
      expect(kebabToCamel('')).toBe('');
      expect(kebabToCamel('a')).toBe('a');
      expect(kebabToCamel('-a')).toBe('A');
    });
  });

  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    it('should handle edge cases', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize('a')).toBe('A');
      expect(capitalize('A')).toBe('A');
    });
  });

  describe('truncate', () => {
    it('should truncate string with default suffix', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
      expect(truncate('test', 10)).toBe('test');
    });

    it('should truncate string with custom suffix', () => {
      expect(truncate('hello world', 5, '***')).toBe('hello***');
    });

    it('should handle edge cases', () => {
      expect(truncate('', 5)).toBe('');
      expect(truncate('a', 0, '...')).toBe('...');
    });
  });
});
