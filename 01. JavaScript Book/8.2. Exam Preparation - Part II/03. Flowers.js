function flowers(input) {
  let chrysanthemums = Number(input[0]);
  let roses = Number(input[1]);
  let tulips = Number(input[2]);
  let season = input[3].toLowerCase();
  let holiday = input[4].toLowerCase();

  let priceChrysanthemums = 0;
  let priceRoses = 0;
  let priceTulips = 0;
  let holidayDiscount = 0.15;

  if (season === `spring` || season === `summer`) {
    switch (holiday) {
      case `y`:
        priceChrysanthemums = 2.0 + 2 * holidayDiscount;
        priceRoses = 4.1 + 4.1 * holidayDiscount;
        priceTulips = 2.5 + 2.5 * holidayDiscount;
        break;
      case `n`:
        priceChrysanthemums = 2.0;
        priceRoses = 4.1;
        priceTulips = 2.5;
        break;
    }
  } else if (season === `autumn` || season === `winter`) {
    switch (holiday) {
      case `y`:
        priceChrysanthemums = 3.75 + 3.75 * holidayDiscount;
        priceRoses = 4.5 + 4.5 * holidayDiscount;
        priceTulips = 4.15 + 4.15 * holidayDiscount;
        break;
      case `n`:
        priceChrysanthemums = 3.75;
        priceRoses = 4.5;
        priceTulips = 4.15;
        break;
    }
  }

  let priceOfBouquet =
    chrysanthemums * priceChrysanthemums +
    roses * priceRoses +
    tulips * priceTulips;

  if (tulips > 7 && season === `spring`) {
    priceOfBouquet *= 0.95;
  }
  if (roses >= 10 && season === `winter`) {
    priceOfBouquet *= 0.9;
  }

  let allFlowers = chrysanthemums + roses + tulips;

  if (allFlowers > 20) {
    priceOfBouquet *= 0.8;
  }
  let totalPriceOfBouquet = priceOfBouquet + 2;
  console.log(totalPriceOfBouquet.toFixed(2));
}
flowers([`2`, `4`, `8`, `spring`, `y`]); //46.14
flowers([`3`, `10`, `9`, `winter`, `n`]); //69.39
flowers([`10`, `10`, `10`, `Autumn`, `N`]); //101.20
