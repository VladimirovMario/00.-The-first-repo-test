function greatestCommonDivisor(input) {
    
    let a = Number(input[0]);
    let b = Number(input[1]);

    while ( b !== 0) {
        let oldB= b;
        b = a % b;
        a = oldB;
    }
console.log(`GCD = ${a}`);
}
greatestCommonDivisor([`90`,`9`])