function shopping(input) {

    let budgetPetar = Number(input[0]);
    let videoCard = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let priceVideoCard = 250 * videoCard;
    let priceProcessors = priceVideoCard * 0.35 * processors;
    let priceRam = priceVideoCard * 0.10 * ram;
    let totalPrice = priceVideoCard + priceProcessors + priceRam;

    if (videoCard > processors) {
        totalPrice = totalPrice * 0.85;
    } if (budgetPetar >= totalPrice) {
        moneyLeft = (budgetPetar - totalPrice).toFixed(2);
        console.log(`You have ${moneyLeft} leva left!`);
    } else if (budgetPetar < totalPrice) {
        moneyLeft = Math.abs(budgetPetar - totalPrice).toFixed(2);
        console.log(`Not enough money! You need ${moneyLeft} leva more!`);
    }
}
shopping(["920.45", "3", "1", "1"]);
shopping(["900", "2", "1", "3"]);
