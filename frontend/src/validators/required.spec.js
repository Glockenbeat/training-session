import { required } from './required';

describe('required validator', () => {
  it('does not crash on undefined', () => {
    expect(() => {
      required();
    }).not.toThrow();
  });

  it('returns an error with an empty string', () => {
    expect(typeof (required(''))).toBe('string');
  });

  it('returns no error with a non-empty string', () => {
    expect(required('I am a string')).toBeUndefined();
  });
});
