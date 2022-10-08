export function replaceKeyChars(replacedStr, keyChars) {
  for (let i = 0; i < keyChars.length; i++) {
    replacedStr = replacedStr.replaceAll(keyChars[i], ' ');
  }

  return replacedStr;
}
