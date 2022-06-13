function distance(input) {
  let firstSpeed = Number(input[0]);
  let firstTime = Number(input[1]);
  let secondTime = Number(input[2]);
  let thirdTime = Number(input[3]);

  let firstDistance = firstSpeed * (firstTime / 60);
  let secondDistance = (firstSpeed + firstSpeed * 0.1) * (secondTime / 60);
  let thirdDistance = (firstSpeed + firstSpeed * 0.1) * 0.95 * (thirdTime / 60);

  let finalDistance = firstDistance + secondDistance + thirdDistance;

  console.log(finalDistance.toFixed(2));
}
distance([`90`, `60`, `70`, `80`]);
distance([`140`, `112`, `75`, `190`]);
