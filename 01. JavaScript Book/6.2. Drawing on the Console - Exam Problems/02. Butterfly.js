function butterfly(input) {

    let num = Number(input[0]);

    let height = num - 2;
    let onePart = num - 1;

    let row = ``;
    let end = ``;
    let middle = ` `;
    let start = ``;
    for (let i = 1; i <= height; i++) {
        if (i % 2 !== 0) {
            row = `*`.repeat(num - 2);
            end = `\\`;
            start = `/`;
        } else {
            row = `-`.repeat(num - 2);
        }
        console.log(row + end + middle + start + row);
    }
    console.log(` `.repeat(onePart) + `@`);

    for (let j = 1; j <= height; j++) {
        if (j % 2 !== 0) {
            row = `*`.repeat(num - 2)
            end = `/`;
            start = `\\`;
        } else {
            row = `-`.repeat(num - 2);
        }
        console.log(row + end + middle + start + row);
    }
}
butterfly([`6`])
// Expected output:

// ****\ /****
// ----\ /----
// ****\ /****
// ----\ /----
//      @
// ****/ \****
// ----/ \----
// ****/ \****
// ----/ \----

