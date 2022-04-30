function metricConverter(input) {
  let size = Number(input[0]);
  let inputData = input[1].toLowerCase();
  let outputData = input[2].toLowerCase();

  switch (inputData) {
    case `mm`:
      size /= 1000;
      break;
    case `cm`:
      size /= 100;
      break;
    case `mi`:
      size /= 0.000621371192;
      break;
    case `in`:
      size /= 39.3700787;
      break;
    case `km`:
      size /= 0.001;
      break;
    case `ft`:
      size /= 3.2808399;
      break;
    case `yd`:
      size /= 1.0936133;
      break;
  }
  switch (outputData) {
    case `mm`:
      size *= 1000;
      break;
    case `cm`:
      size *= 100;
      break;
    case `mi`:
      size *= 0.000621371192;
      break;
    case `in`:
      size *= 39.3700787;
      break;
    case `km`:
      size *= 0.001;
      break;
    case `ft`:
      size *= 3.2808399;
      break;
    case `yd`:
      size *= 1.0936133;
      break;
  }
  console.log(size);
}
metricConverter([`150`, `MI`, `IN`]);
metricConverter([`450`, `yd`, `km`]);
metricConverter([`1755.50`, `cm`, `yd`]);
