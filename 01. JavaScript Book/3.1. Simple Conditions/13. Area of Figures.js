function areaOfFigures(input) {
  let index = 0;
  let figure = input[index];
  index++;

  if (figure === `square`) {
    let sideLength = input[index];
    let area = sideLength * sideLength;
    console.log(area);
  } else if (figure === `rectangle`) {
    let sideLength = input[index];
    index++;
    let sideWidth = input[index];
    let area = sideLength * sideWidth;
    console.log(area);
  } else if (figure === `circle`) {
    let r = input[index];
    let area = Math.pow(r, 2) * Math.PI;
    console.log(area.toFixed(3));
  } else if (figure === `triangle`) {
    let height = input[index];
    index++;
    let base = input[index];
    let area = (height * base) / 2;
    console.log(area);
  }
}
areaOfFigures([`square`, `5`]);
areaOfFigures([`rectangle`, `7`, `2.5`]);
areaOfFigures([`circle`, `6`]);
areaOfFigures([`triangle`, `4.5`, `20`]);
