function christmasGifts(input) {
  let index = 0;
  let command = input[index];
  index++;

  let kidsCount = 0;
  let adultCount = 0;

  while (command !== "Christmas") {
    let age = Number(command);

    if (age <= 16) {
      kidsCount++;
    } else {
      adultCount++;
    }
    command = input[index];
    index++;
  }
  let priceForToys = 5 * kidsCount;
  let priceForSweaters = 15 * adultCount;

  console.log(`Number of adults: ${adultCount}`);
  console.log(`Number of kids: ${kidsCount}`);
  console.log(`Money for toys: ${priceForToys}`);
  console.log(`Money for sweaters: ${priceForSweaters}`);
}
christmasGifts(["16", "16", "16", "16", "16", "Christmas"]);
