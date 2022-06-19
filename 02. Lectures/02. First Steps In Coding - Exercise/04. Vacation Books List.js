function vacationBooksList(input) {
  let numberPages = Number(input[0]);
  let pages = Number(input[1]);
  let days = Number(input[2]);
  let hours = numberPages / pages / days;

  console.log(hours);
}
vacationBooksList(["432", "15", "4"]);
