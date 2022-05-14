function trip(input) {
  let budget = Number(input[0]);
  let season = input[1].toLowerCase();

  let destination = ``;
  let trip = ``;

  if (budget <= 100) {
    destination = `Bulgaria`;
    if (season === `summer`) {
      budget *= 0.3;
    } else {
      budget *= 0.7;
    }
  } else if (budget > 1000) {
    destination = `Europe`;
    budget *= 0.9;
  } else {
    destination = `Balkans`;
    if (season === `summer`) {
      budget *= 0.4;
    } else {
      budget *= 0.8;
    }
  }

  if (season === `winter` || destination === `Europe`) {
    trip = `Hotel`;
  } else if (season === `summer`) {
    trip = `Camp`;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${trip} - ${budget.toFixed(2)}`);
}
trip([`50`, `summer`]);
trip([`312`, `summer`]);
trip([`75`, `winter`]);
trip([`1500`, `summer`]);
