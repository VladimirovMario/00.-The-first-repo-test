function fruitOrVegetable(input) {

    let fruitOrVege = input[0].toLowerCase();

    if (fruitOrVege === `banana` || fruitOrVege === `apple` || fruitOrVege === `kiwi`) {
        console.log(`fruit`);
    } else if (fruitOrVege === `cherry` || fruitOrVege === `lemon` || fruitOrVege === `grapes`) {
        console.log(`fruit`);
    } else if (fruitOrVege === `tomato` || fruitOrVege === `cucumber` || fruitOrVege === `pepper`) {
        console.log(`vegetable`);
    } else if (fruitOrVege === `carrot`) {
        console.log(`vegetable`);
    } else {
        console.log(`unknown`);
    }

}
fruitOrVegetable([`banana`]);
fruitOrVegetable([`tomato`]);
fruitOrVegetable([`kiwi`]);
fruitOrVegetable([`javascript`]);