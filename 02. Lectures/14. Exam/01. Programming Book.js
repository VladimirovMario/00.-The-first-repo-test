function programmingBook(input) {
  let onePagePrice = Number(input[0]);
  let oneCoverPrice = Number(input[1]);
  let percentageDiscount = Number(input[2]);
  let designPrice = Number(input[3]);
  let percentageCrew = Number(input[4]);

  let booksPages = 899;

  let sumForBook = booksPages * onePagePrice + oneCoverPrice * 2;
  let sumForBookAfterDiscount =
    sumForBook - (sumForBook * percentageDiscount) / 100;
  let sumAfterDesign = sumForBookAfterDiscount + designPrice;
  let total = sumAfterDesign - (sumAfterDesign * percentageCrew) / 100;
  console.log(`Avtonom should pay ${total.toFixed(2)} BGN.`);
}
programmingBook(["0.02", "0.50", "18", "21", "50"]);
