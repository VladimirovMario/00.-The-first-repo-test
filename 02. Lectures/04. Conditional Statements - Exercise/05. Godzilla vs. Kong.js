function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let numExtras = Number(input[1]);
    let clothesExtra = Number(input[2]);
    
    let decor = budget * 0.10;
    let sumClothes = numExtras * clothesExtra;
    let discount = sumClothes * 0.10;
    let sumFilm = decor + sumClothes;
    let total = budget - sumFilm;

    if (numExtras > 150) {
        costFilm = decor + sumClothes - discount
        total = (budget - costFilm);
    } if (sumFilm > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(total).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${total.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000","120","55.5"]);
godzillaVsKong(["9587.88","222","55.68"]);















