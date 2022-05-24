function logistics(input) {
  let index = 0;
  let numberOfLoads = Number(input[0]);
  index++;

  let tonnageNextLoad = 0;
  let sumTonnageAllLoads = 0;
  let busLoads = 0;
  let truckLoads = 0;
  let trainLoads = 0;
  let priceBus = 0;
  let priceTruck = 0;
  let priceTrain = 0;

  for (let i = 1; i <= numberOfLoads; i++) {
    tonnageNextLoad = Number(input[index]);
    index++;
    sumTonnageAllLoads += tonnageNextLoad;
    if (tonnageNextLoad <= 3) {
      busLoads += tonnageNextLoad;
      priceBus = 200;
    } else if (tonnageNextLoad <= 11) {
      truckLoads += tonnageNextLoad;
      priceTruck = 175;
    } else {
      trainLoads += tonnageNextLoad;
      priceTrain = 120;
    }
  }
  let percentageBusLoads = (busLoads / sumTonnageAllLoads) * 100;
  let percentageTruckLoads = (truckLoads / sumTonnageAllLoads) * 100;
  let percentageTrainLoads = (trainLoads / sumTonnageAllLoads) * 100;

  let avaregePrice =
    (busLoads * priceBus + truckLoads * priceTruck + trainLoads * priceTrain) /
    sumTonnageAllLoads;

  console.log(avaregePrice.toFixed(2));
  console.log(percentageBusLoads.toFixed(2) + `%`);
  console.log(percentageTruckLoads.toFixed(2) + `%`);
  console.log(percentageTrainLoads.toFixed(2) + `%`);
}
logistics([`4`, `1`, `5`, `16`, `3`]);
console.log(`---`);
logistics([`5`, `2`, `10`, `20`, `1`, `7`]);
console.log(`---`);
logistics([`4`, `53`, `7`, `56`, `999`]);
