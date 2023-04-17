import Validator from '../js/nickName';

test('testing nicknames', () => {
  let nickName = '12Row';
  expect(Validator.validateUsername(nickName)).toBe(false);
  nickName = 'Row12';
  expect(Validator.validateUsername(nickName)).toBe(false);
  nickName = '-Row';
  expect(Validator.validateUsername(nickName)).toBe(false);
  nickName = 'Row-';
  expect(Validator.validateUsername(nickName)).toBe(false);
  nickName = '@Row';
  expect(Validator.validateUsername(nickName)).toBe(false);
  nickName = 'Row%';
  expect(Validator.validateUsername(nickName)).toBe(false);
  nickName = 'Row3333-RET';
  expect(Validator.validateUsername(nickName)).toBe(false);
  nickName = 'Ro-wQWE';
  expect(Validator.validateUsername(nickName)).toBe(true);
  nickName = 'Row-QWE_AS';
  expect(Validator.validateUsername(nickName)).toBe(true);
});
