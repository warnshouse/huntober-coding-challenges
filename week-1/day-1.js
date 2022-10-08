export function fixString(str) {
  let fixedStr = '';
  const cipher = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q'];

  for (let i = 0; i < str.length; i++) {
    if (cipher[str[i]]) {
      fixedStr += cipher[str[i]];
    } else if (cipher.includes(str[i])) {
      fixedStr += cipher.indexOf(str[i]);
    } else {
      fixedStr += str[i];
    }
  }

  return fixedStr;
}

// console.log(fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."));
