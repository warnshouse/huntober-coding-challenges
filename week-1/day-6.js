export function removeEveryXthChar(reducedStr, x) {
  for (let i = x - 1; i < reducedStr.length; i += x - 1) {
    reducedStr = reducedStr.slice(0, i) + reducedStr.slice(i + 1);
  }

  return reducedStr;
}

/*
console.log(removeEveryXthChar("The LBachyelor^ is ma tehrrib le tpelev!isioO" +
                               "n sh8ow.", 5));
*/
