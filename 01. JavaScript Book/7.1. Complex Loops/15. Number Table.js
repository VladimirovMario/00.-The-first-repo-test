function numberTable(input) {

    let num = Number(input[0]);
    let result = ``;

    for (let row = 0; row < num; row++) {
        for (let col = 0; col < num; col++) {
            let currentNum = row + col + 1;

            if (currentNum > num) {
                currentNum = 2 * num - currentNum;

            }
            result = result + currentNum + ` `;
        }
        console.log(result);
        result = ``;
    }

}