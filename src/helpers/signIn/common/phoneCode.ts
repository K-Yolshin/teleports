/**
 * Коды телефонов
 */
export const codes = {
  first: '+7',
  second: '+305',
};

/**
 * Поиск ключа в объекте codes
 * @param codeText - значение кода (н-р +7)
 */
export const findCodeByValue = (codeText: string) => {
  const foundCode = Object.keys(codes).find(code => codes[code] === codeText);

  return foundCode || '';
};

/**
 * Текст кода по умолчанию (+7)
 */
export const defaultCode = Object.values(codes).shift() || '';
