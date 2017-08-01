import { email } from './email';

describe('email validator', () => {
  it('does not crash on undefined', () => {
    expect(() => {
      email();
    }).not.toThrow();
  });

  it('returns an error with an invalid email', () => {
    expect(typeof (email('not@valid'))).toBe('string');
  });

  it('does not return an error with a valid email', () => {
    expect(email('is@valid.com')).toEqual(undefined);
  });
});
