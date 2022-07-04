function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;

  let countStudentTickets = 0;
  let countStandardTickets = 0;
  let countKidsTickets = 0;

  while (command !== "Finish") {
    let nameOfFilm = command;
    let freeSpace = Number(input[index]);
    index++;
    let typeOfTicket = input[index];
    index++;

    let seatsTaken = 0;
    while (typeOfTicket !== "End") {
      seatsTaken++;

      if (typeOfTicket === "student") {
        countStudentTickets++;
      } else if (typeOfTicket === "standard") {
        countStandardTickets++;
      } else if (typeOfTicket === "kid") {
        countKidsTickets++;
      }

      if (seatsTaken >= freeSpace) {
        break;
      }
      typeOfTicket = input[index];
      index++;
    }
    let percentOfRoom = (seatsTaken / freeSpace) * 100;

    console.log(`${nameOfFilm} - ${percentOfRoom.toFixed(2)}% full.`);

    command = input[index];
    index++;
  }
  let totalTiCkets =
    countStudentTickets + countStandardTickets + countKidsTickets;
  let percentStudents = (countStudentTickets / totalTiCkets) * 100;
  let percentStandards = (countStandardTickets / totalTiCkets) * 100;
  let percentKids = (countKidsTickets / totalTiCkets) * 100;

  console.log(`Total tickets: ${totalTiCkets}`);
  console.log(`${percentStudents.toFixed(2)}% student tickets.`);
  console.log(`${percentStandards.toFixed(2)}% standard tickets.`);
  console.log(`${percentKids.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
console.log(`---`);
cinemaTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
