function checkEquality(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        return false;
      }
    }
  }

  return true;
}

/*
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']];
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']];
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']];
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']];

console.log(checkEquality(arr1, arr2), true);
console.log(checkEquality(arr1, arr3), false);
console.log(checkEquality(arr1, arr4), false);
*/
