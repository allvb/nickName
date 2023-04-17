export default class Validator {
  static validateUsername(nickName) {
    const symbolsToUse = /^([^\d-\W])([a-zA-Z-_\d]*)([^\d-_\W])+$/.test(nickName); // проверка первого и последнего символа и использованных символов
    const exeptThreeNumbersInRow = !/\d{4,}/.test(nickName); // нельзя более 3 цифр подряд
    return symbolsToUse && exeptThreeNumbersInRow;
  }
}
