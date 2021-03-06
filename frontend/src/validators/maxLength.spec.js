import { maxLength } from './maxLength';

describe('max length validator', () => {
  it('doesnt crash on undefined', () => {
    expect(() => {
      maxLength(10)();
    }).not.toThrow();
  });

  it('returns an error with a string longer than max', () => {
    expect(typeof (maxLength(10)('1234567890-'))).toBe('string');
  });

  it('returns no error with a string shorter than max', () => {
    expect(maxLength(10)('123')).toEqual(undefined);
  });
});
