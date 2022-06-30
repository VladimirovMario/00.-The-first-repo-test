function readText(input) {
  let index = 0;
  let word = input[index];
  index++;
  while (word != "Stop") {
    if (word === "Stop") {
      break;
    }
    console.log(word);
    word = input[index];
    index++;
  }
}
readText([
  "Sofia",
  "Berlin",
  "Moscow",
  "Athens",
  "Madrid",
  "London",
  "Paris",
  "Stop",
  "AfterStop",
]);
