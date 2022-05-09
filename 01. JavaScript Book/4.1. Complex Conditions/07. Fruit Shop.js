function fruitShop(input) {

    let fruits = input[0].toLowerCase();
    let daysOfWeek = input[1];
    let quantity = Number(input[2]);

    let ifWorkingDays1 = (daysOfWeek === `Monday` || daysOfWeek === `Tuesday` || daysOfWeek === `Wednesday`);
    let ifWorkingDays2 = (daysOfWeek === `Thursday` || daysOfWeek === `Friday`);
    let weekendDays = (daysOfWeek === `Saturday` || daysOfWeek === `Sunday`);

    if (ifWorkingDays1 || ifWorkingDays2) {
        switch (fruits) {
            case `banana`:
                price = 2.50 * quantity
                console.log(price.toFixed(2));
                break;
            case `apple`:
                price = 1.20 * quantity
                console.log(price.toFixed(2));
                break;
            case `orange`:
                price = 0.85 * quantity
                console.log(price.toFixed(2));
                break;
            case `grapefruit`:
                price = 1.45 * quantity
                console.log(price.toFixed(2));
                break;
            case `kiwi`:
                price = 2.70 * quantity
                console.log(price.toFixed(2));
                break;
            case `pineapple`:
                price = 5.50 * quantity
                console.log(price.toFixed(2));
                break;
            case `grapes`:
                price = 3.85 * quantity
                console.log(price.toFixed(2));
                break;
            default:
                console.log(`error`);
        }
    } else if (weekendDays) {
        switch (fruits) {
            case `banana`:
                price = 2.70 * quantity
                console.log(price.toFixed(2));
                break;
            case `apple`:
                price = 1.25 * quantity
                console.log(price.toFixed(2));
                break;
            case `orange`:
                price = 0.90 * quantity
                console.log(price.toFixed(2));
                break;
            case `grapefruit`:
                price = 1.60 * quantity
                console.log(price.toFixed(2));
                break;
            case `kiwi`:
                price = 3.00 * quantity
                console.log(price.toFixed(2));
                break;
            case `pineapple`:
                price = 5.60 * quantity
                console.log(price.toFixed(2));
                break;
            case `grapes`:
                price = 4.20 * quantity
                console.log(price.toFixed(2));
                break;
            default:
                console.log(`error`);
        }
    } else {
        console.log(`error`);
    }
}
fruitShop([`orange`, `Sunday`, `3`]);
fruitShop([`kiwi`, `Monday`, `2.5`]);
fruitShop([`grapes`, `Saturday`, `0.5`]);
fruitShop([`tomato`, `Monday`, `0.5`]);