function sumDigits(input) {
  let num = Number(input[0]);
  sum = 0;

  do {
    sum += num % 10;
    num = Math.floor(num / 10);
  } while (num > 0);
  console.log(`Sum of digits: ${sum}`);
}
sumDigits([`132`]);

// solution with for loop

// function sumOfNumbers(input) {

//     let text = (input[0])
//     let sum = 0
//     for (let i = 0; i < text.length; i++ ) {
//         sum += Number(text[i]) 

//     }
//     console.log(`The sum of the digits is:${sum}`);

// }
// sumOfNumbers(["1234"])
