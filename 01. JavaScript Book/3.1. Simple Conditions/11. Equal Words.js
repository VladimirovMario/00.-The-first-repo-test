function equalWords(input) {
  let word1 = input[0].toLowerCase();
  let word2 = input[1].toLowerCase();

  if (word1 === word2) {
    console.log(`yes`);
  } else {
    console.log(`no`);
  }
}
equalWords([`Hello`, `Hello`]);
equalWords([`SoftUni`, `softuni`]);
equalWords([`Soft`, `Uni`]);
equalWords([`beer`, `vodka`]);
