function moveThingsAround(arr) {
  return arr.sort((a, b) => {
    return (a.includes("a") || b.includes("a"))
      ? b.includes("a") - a.includes("a")
      : (a.length > 3) - (b.length > 3);
  });
}

/*
const myArr = ["hi", "hello", "howdy", "hola", "hej", "hallo", "heyyy"];

moveThingsAround(myArr);
console.log(myArr);
// ["hola", "hallo", "hi", "hej", "hello", "howdy", "heyyy"]
*/
