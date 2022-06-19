function repainting (input){
let nylon =(Number (input[0]) + 2) * 1.50;
let paint =(Number (input[1]) + ( Number (input[1]) * 0.10)) * 14.50;
let thinner = Number (input[2]) * 5;
let hours = Number (input[3]);
let plasticBags = 0.40;
let materials = nylon + paint + thinner +plasticBags;
let sumMasters = ((materials * 0.30) * hours);
console.log (materials + sumMasters);
}
repainting ([5,10,10,1]);


