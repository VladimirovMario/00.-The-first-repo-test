function leftAndRightSum(input) {
  let index = 0;
  let num = Number(input[index]);
  index++;

  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < num; i++) {
    leftSum += Number(input[index]);
    index++;
  }

  for (let j = index; j <= num * 2; j++) {
    rightSum += Number(input[j]);
  }

  if (leftSum === rightSum) {
    console.log(`Yes, sum = ${leftSum}`);
  } else {
    let result = Math.abs(leftSum - rightSum);
    console.log(`No, diff = ${result}`);
  }
}
leftAndRightSum([`2`, `11`, `90`, `60`, `40`]);
leftAndRightSum([`4`, `90`, `9`, `1`, `2`, `50`, `50`, `1`, `1`]);
