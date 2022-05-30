function drawFort(input) {

    let num = Number(input[0])

    let width = 2 * num;
    let leftRightInnerPart = Math.floor(num / 2);
    let middle = 2 * num - 4 - leftRightInnerPart * 2

    let peak = (`/` + `^`.repeat(leftRightInnerPart) + `\\`)
    console.log(peak + `_`.repeat(middle) + peak);


    for (let midPart = 0; midPart < num - 3; midPart++) {
        let outer = `|`
        let inner = ` `.repeat(width - 2)
        console.log(outer + inner + outer);

    }
    console.log(`|` + ` `.repeat(leftRightInnerPart + 1)
        + `_`.repeat(middle) + ` `.repeat(leftRightInnerPart + 1) + `|`);

    let downPart = (`\\` + `_`.repeat(leftRightInnerPart) + `/`)
    console.log(downPart + ` `.repeat(middle) + downPart);

}
drawFort([`6`])
