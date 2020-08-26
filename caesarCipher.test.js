import caesarCipher from './caesarCipher';

const caesarCipherInstance = caesarCipher();

test('it encrypts a string', () => {
  expect(caesarCipherInstance.convertStringNumbers('Hel~lo Wor?l`@[}d!,', 1)).not.toBe('Ifm~mp Xps?m`a[}e!,');
  expect(caesarCipherInstance.convertStringNumbers('If he had anything confidential to say', 7)).toBe('Pm ol ohk hufaopun jvumpkluaphs av zhf');
  expect(caesarCipherInstance.convertStringNumbers('Thus The Word is Great;..!', 7)).toBe('Aobz Aol Dvyk pz Nylha;..!');
});


test('it encrypts another strings', () => {
  expect(caesarCipherInstance.convertStringNumbers('If he had anything confidential to say', 7)).toBe('Pm ol ohk hufaopun jvumpkluaphs av zhf');
});

test('it encrypts one more other strings', () => {
  expect(caesarCipherInstance.convertStringNumbers('This is Another String!', 8)).toBe('Bpqa qa Ivwbpmz Abzqvo!');
});