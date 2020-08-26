import capitalize from './capitalize';

test('capitalizes a string', () => {
  expect(capitalize('name')).toBe('Name');
  expect(capitalize('name')).not.toBe('name');
});
