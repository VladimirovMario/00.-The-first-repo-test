function suppliesForSchool(input) {
  let pen = Number(input[0]);
  let markers = Number(input[1]);
  let litres = Number(input[2]);
  let percent = Number(input[3]);
  let priceMaterials = pen * 5.8 + markers * 7.2 + litres * 1.2;
  let total = priceMaterials - (priceMaterials * percent) / 100;

  console.log(total);
}
suppliesForSchool(["4", "2", "5", "13"]);
