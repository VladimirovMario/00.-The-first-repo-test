function solve(input) {
  function printName(name) {
    let greeting = `Hello, ${name}!`;
    return greeting;
  }
  let name = input[0];

  console.log(printName(name));
}
solve([`Peter`]);

// function solve() {

//     function printName() {
//         let name = `Peter`;
//         let greeting = `Hello, ${name}!`;
//         return greeting;
//     }

//     console.log(printName());

// }
// solve();
