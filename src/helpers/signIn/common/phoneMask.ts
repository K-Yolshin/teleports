/**
 * Применение маски для телефона
 * @param phone - номер телефона
 * @param mask - маска в формате nnn-nnn-nn-nn где n - любая цифра
 */
export const acceptMask = (phone: string = '', mask: string = 'nnn-nnn-nn-nn') => {
  const pattern = 'n';

  let result = '';
  let pos = 0;

  mask
    .split('')
    .forEach((maskSymbol) => {
      if (phone.length <= pos) {
        return;
      }

      if (maskSymbol !== pattern && phone[pos] === maskSymbol) {
        /*если символ в маске не шаблонный*/
        result += phone[pos];
        pos += 1;
      } else if (maskSymbol === pattern && /\d/.test(phone[pos])) {
        /*если символ в маске шаблонный и цифра в телефоне следует*/
        result += phone[pos];
        pos += 1;
      } else if (maskSymbol !== pattern) {
        /*если символ в маске не шаблонный и позиция в phone не совпадает*/
        result += maskSymbol;
      } else {
        /*если должно быть число а идет другой символ (ищем первое число в подстроке)*/
        const str = phone.substr(pos);
        const findNumber = str.match(/\d/);

        if (findNumber && findNumber.index) {
          pos += findNumber.index + 1;
          result += findNumber[0];
        } else {
          pos += phone.length;
        }
      }
    });

  return result;
};
