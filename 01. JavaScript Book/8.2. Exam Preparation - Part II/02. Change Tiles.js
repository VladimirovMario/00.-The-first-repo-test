function changeTiles(input) {

    let savedMoney = Number(input[0]);
    let widthOfFloor = Number(input[1]);
    let lengthOfFloor = Number(input[2]);
    let sideOfTriangle = Number(input[3]);
    let heightOtTriangle = Number(input[4]);
    let priceForTile = Number(input[5]);
    let sumForMaster = Number(input[6]);

    let areaOfFloor = widthOfFloor * lengthOfFloor;
    let areaOfTile = (sideOfTriangle * heightOtTriangle) / 2;
    let neededTiles = Math.ceil(areaOfFloor / areaOfTile) + 5;
    let totalSum = neededTiles * priceForTile + sumForMaster;
    let diff = Math.abs(totalSum - savedMoney);

    if (savedMoney >= totalSum) {
        console.log(`${diff.toFixed(2)} lv left.`);
    } else {
        console.log("You'll need" + ` ` + `${diff.toFixed(2)} lv more.`);
    }
}
changeTiles([`1000`, `5.55`, `8.95`, `0.90`, `0.85`, `13.99`, `321`]);
changeTiles([`500`, `3`, `2.5`, `0.5`, `0.7`, `7.80`, `100`]);