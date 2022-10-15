/*
// My attempt at a shuffle function
function shuffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let randomNum1 = Math.floor(Math.random() * arr.length);
      let randomNum2 = Math.floor(Math.random() * arr[i].length);

      [arr[randomNum1][randomNum2], arr[i][j]] = 
      [arr[i][j], arr[randomNum1][randomNum2]];
    }
  }

  return arr;
}
*/

function fisherYates(arr) {
  const flattenedArray = arr.flat();
  const unflattenedArray = [];
  let subArray = [];
  let numOfUnshuffled = flattenedArray.length;
  let randomIndex = null;
  
  // While there remain elements to shuffle...
  while (numOfUnshuffled) {

    // Randomly pick the index of a remaining element...
    randomIndex = Math.floor(Math.random() * numOfUnshuffled--);

    // Push that element to subArray...
    subArray.push(flattenedArray[randomIndex]);

    // And replace that element with the (currently) last element
    flattenedArray[randomIndex] = flattenedArray[numOfUnshuffled];

    // When subArray has 3 elements, push it to unflattenedArray and empty it
    if (subArray.length === 3) {
      unflattenedArray.push(subArray);
      subArray = [];
    }
  }

  return unflattenedArray;
}

/*
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(fisherYates(myArray));
*/
