function findNestedIndex(ele, arr) {
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i].indexOf(ele);

    if (index > -1) {
      return [i, index];
    }
  }
}

function moveUp(ele, arr) {
  const origIndex = findNestedIndex(ele, arr);

  if (origIndex[0] !== 0) {
    const newIndex = [origIndex[0] - 1, origIndex[1]];
    [myGrid[origIndex[0]][origIndex[1]], myGrid[newIndex[0]][newIndex[1]]] = 
    [myGrid[newIndex[0]][newIndex[1]], myGrid[origIndex[0]][origIndex[1]]];
  }
}

function moveDown(ele, arr) {
  const origIndex = findNestedIndex(ele, arr);

  if (origIndex[0] !== myGrid.length - 1) {
    const newIndex = [origIndex[0] + 1, origIndex[1]];
    [myGrid[origIndex[0]][origIndex[1]], myGrid[newIndex[0]][newIndex[1]]] = 
    [myGrid[newIndex[0]][newIndex[1]], myGrid[origIndex[0]][origIndex[1]]];
  }
}

/*
const myGrid = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];

moveUp("h", myGrid);
console.log(myGrid);
// [["a", "b", "c"], ["d", "h", "f"], ["g", "e", "i"]]

moveUp("h", myGrid);
console.log(myGrid);
// [["a", "h", "c"], ["d", "b", "f"], ["g", "e", "i"]]

moveUp("h", myGrid);
console.log(myGrid);
// [["a", "h", "c"], ["d", "b", "f"], ["g", "e", "i"]] no change

moveDown("f", myGrid);
console.log(myGrid);
// [["a", "h", "c"], ["d", "b", "i"], ["g", "e", "f"]]

moveDown("f", myGrid);
console.log(myGrid);
// [["a", "h", "c"], ["d", "b", "i"], ["g", "e", "f"]] no change
*/
