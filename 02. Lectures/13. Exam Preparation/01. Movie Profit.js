function movieProfit(input) {
  let filmName = input[0];
  let numOfDays = Number(input[1]);
  let numOfTickets = Number(input[2]);
  let ticketsPrice = Number(input[3]);
  let percentageOfCinema = Number(input[4]);

  let sumOfTicketsPerDay = numOfTickets * ticketsPrice;
  let totalIncome = numOfDays * sumOfTicketsPerDay;
  let percentage = (totalIncome * percentageOfCinema) / 100;
  let finalSum = totalIncome - percentage;

  console.log(
    `The profit from the movie ${filmName} is ${finalSum.toFixed(2)} lv.`
  );
}
movieProfit([`The Programmer`, `20`, `500`, `7.50`, `7`]);
movieProfit([`The Jungle`, `22`, `20500`, `9.37`, `30`]);
