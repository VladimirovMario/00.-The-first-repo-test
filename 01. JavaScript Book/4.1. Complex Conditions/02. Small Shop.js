function smallShop(input) {
  let product = input[0].toLowerCase();
  let town = input[1].toLowerCase();
  let quantity = Number(input[2]);

  if (town === `sofia`) {
    if (product === `coffee`) {
      console.log((0.5 * quantity).toFixed(2));
    } else if (product === `water`) {
      console.log((0.8 * quantity).toFixed(2));
    } else if (product === `beer`) {
      console.log((1.2 * quantity).toFixed(2));
    } else if (product === `sweets`) {
      console.log((1.45 * quantity).toFixed(2));
    } else if (product === `peanuts`) {
      console.log((1.6 * quantity).toFixed(2));
    }
  } else if (town === `plovdiv`) {
    if (product === `coffee`) {
      console.log((0.4 * quantity).toFixed(2));
    } else if (product === `water`) {
      console.log((0.7 * quantity).toFixed(2));
    } else if (product === `beer`) {
      console.log((1.15 * quantity).toFixed(2));
    } else if (product === `sweets`) {
      console.log((1.3 * quantity).toFixed(2));
    } else if (product === `peanuts`) {
      console.log((1.5 * quantity).toFixed(2));
    }
  } else if (town === `varna`) {
    if (product === `coffee`) {
      console.log((0.45 * quantity).toFixed(2));
    } else if (product === `water`) {
      console.log((0.7 * quantity).toFixed(2));
    } else if (product === `beer`) {
      console.log((1.1 * quantity).toFixed(2));
    } else if (product === `sweets`) {
      console.log((1.35 * quantity).toFixed(2));
    } else if (product === `peanuts`) {
      console.log((1.55 * quantity).toFixed(2));
    }
  }
}
smallShop([`beer`, `Sofia`, `6`]);
smallShop([`coffee`, `Varna`, `2`]);
smallShop([`peanuts`, `Plovdiv`, `1`]);
smallShop([`water`, `Plovdiv`, `3`]);
