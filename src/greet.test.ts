import { greet } from './main';

test('greet function returns correct greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet function handles empty string', () => {
  expect(greet('')).toBe('Hello, !');
});

