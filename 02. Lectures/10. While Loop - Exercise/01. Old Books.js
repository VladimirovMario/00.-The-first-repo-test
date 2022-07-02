function oldBooks(input) {
  let index = 0;
  let favoriteBook = input[index];
  index++;
  let searchForBook = input[index];

  let countBooks = 0;

  while (searchForBook !== "No More Books") {
    searchForBook = input[index];
    index++;

    if (favoriteBook === searchForBook) {
      console.log(`You checked ${countBooks} books and found it.`);
      break;
    }
    if (searchForBook === "No More Books") {
      console.log(`The book you search is not here!`);
      console.log(`You checked ${countBooks} books.`);
      break;
    }

    countBooks++;
  }
}
oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Triple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
