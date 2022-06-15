function lettersCombinations(input) {

    let firstLetter = input[0];
    let secondLetter = input[1];
    let exception = input[2];

    let counter = 0;
    let result = ``

    for (let ch1 = firstLetter.charCodeAt(0); ch1 <= secondLetter.charCodeAt(0); ch1++) {
        let s1 = String.fromCharCode(ch1)
        for (let ch2 = firstLetter.charCodeAt(0); ch2 <= secondLetter.charCodeAt(0); ch2++) {
            let s2 = String.fromCharCode(ch2)
            for (let ch3 = firstLetter.charCodeAt(0); ch3 <= secondLetter.charCodeAt(0); ch3++) {
                let s3 = String.fromCharCode(ch3)
                if (s1 !== exception && s2 !== exception && s3 !== exception) {
                    result += `${s1}${s2}${s3} `
                    counter++
                }
            }
        }
    }
    console.log(`${result}${counter}`);
}
// lettersCombinations([`a`, `c`, `b`]);
// lettersCombinations([`a`, `c`, `z`]);
lettersCombinations([`f`, `k`, `h`]);

