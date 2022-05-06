function harvest(input) {

    let vineyardArea = Number(input[0]);
    let grapePerSquare = Number(input[1]);
    let neededLiters = Number(input[2]);
    let workers = Number(input[3]);

    let wine = (vineyardArea * 40) / 100;
    let harvGrapes = wine * grapePerSquare;
    let literWineproduced = harvGrapes / 2.5
    let diff = Math.abs(neededLiters - literWineproduced);
    let literForOneWorker = Math.ceil(diff / workers);

    if (literWineproduced < neededLiters) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(literWineproduced)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${literForOneWorker} liters per person.`);
    }
}
// harvest([`650`, `2`, `175`, `3`]);
harvest([`1020`, `1.5`, `425`, `4`]);