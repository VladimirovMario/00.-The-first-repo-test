function triangleOfDollars1(input) {
  let num = Number(input[0]);
  let dollar = ``;
  for (let i = 1; i <= num; i++) {
    dollar += `$ `;
    console.log(dollar);
  }
}
triangleOfDollars1([`3`]);

// console.log(`---`);

// function triangle(input) {
//     let num = Number(input[0]);
//     for (let i = 1; i <= num; i++) {
//       let dollars = `${i}`;
//       for (let j = 1; j < i; j++) {
//         dollars += ` ${i}`;
//       }
//       console.log(dollars);
//     }
//   }
//   triangle([`3`]);

// console.log(`---`);

// function triangleOfDollars3(input) {
//     let num = Number(input[0]);

//     for (let i = 1; i <= num; i++) {
//         let dollars = `$ `.repeat(i)

//             console.log(dollars);
//     }
// }
// triangleOfDollars3([`3`])
