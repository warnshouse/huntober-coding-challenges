function moveLeft(ele, arr) {
  let origIndex = arr.indexOf(ele);

  if (origIndex !== 0) {
    arr.splice(origIndex, 1);
    arr.splice(origIndex - 1, 0, ele);
  }
}

function moveRight(ele, arr) {
  let origIndex = arr.indexOf(ele);

  if (origIndex !== arr.length - 1) {
    arr.splice(origIndex, 1);
    arr.splice(origIndex + 1, 0, ele);
  }
}

/*
const myArray = ["abc", "xyz", 1, 2, "Hey!"];

moveLeft("xyz", myArray);
console.log(myArray); // ["xyz", "abc", 1, 2, "Hey!"]

moveLeft("xyz", myArray);
console.log(myArray); // ["xyz", "abc", 1, 2, "Hey!"] no change

moveRight(2, myArray);
console.log(myArray); // ["xyz", "abc", 1, "Hey!", 2]

moveRight(2, myArray);
console.log(myArray); // ["xyz", "abc", 1, "Hey!", 2] no change
*/
