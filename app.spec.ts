import { describe, expect, it } from 'vitest';

describe('vitest example', () => {
  const value = 5;
  it('has to match', () => {
    expect(value).toBe(5);
  });
});
