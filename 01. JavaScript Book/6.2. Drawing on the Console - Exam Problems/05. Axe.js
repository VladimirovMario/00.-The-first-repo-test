function axe(input) {

    let num = Number(input[0]);

    let width = 5 * num;
    let leftDashes = 3 * num;
    let middleDashes = 0;
    let rightDashes = width - leftDashes - middleDashes - 2;

    for (let topPart = 0; topPart < num; topPart++) {
        console.log(`-`.repeat(leftDashes) + `*`
            + `-`.repeat(middleDashes) + `*` + `-`.repeat(rightDashes));

        middleDashes++;
        rightDashes--;
    }
    leftDashes++;
    middleDashes--;
    rightDashes++;

    let middlePart = Math.floor(num / 2);
    for (let middle = 0; middle < middlePart; middle++) {
        console.log(`*`.repeat(leftDashes)
            + `-`.repeat(middleDashes) + `*` + `-`.repeat(rightDashes));
    }
    leftDashes--;
    for (let downPart = 0; downPart < middlePart - 1; downPart++) {
        console.log(`-`.repeat(leftDashes)
            + `*` + `-`.repeat(middleDashes) + `*` + `-`.repeat(rightDashes));
        leftDashes--;
        middleDashes += 2;
        rightDashes--;

    }
    middleDashes += 2;
    console.log(`-`.repeat(leftDashes) + `*`.repeat(middleDashes) + `-`.repeat(rightDashes));
}
axe([`5`])