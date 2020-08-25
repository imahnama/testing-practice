import caesarCipher from './caesarCipher';

const caesarCipherInstance = caesarCipher();

test('it encrypts a string', () => {
  expect(caesarCipherInstance.convertStringNumbers('Hel~lo Wor?l`@[}d!,', 1)).toBe('Ifm~mp Xps?m`@[}e!,');
  expect(caesarCipherInstance.convertStringNumbers('Hel~lo Wor?l`@[}d!,', 1)).not.toBe('Ifm~mp Xps?m`a[}e!,');
});
