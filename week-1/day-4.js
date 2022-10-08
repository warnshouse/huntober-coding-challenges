export function reverseString(str) {
  const reversedStr = str.split('').reverse().join('');
  return reversedStr;
}

/*
console.log(reverseString("   The white space at the beginning of this string" +
                          " doesn't match the whitespace at the end. "));
*/
