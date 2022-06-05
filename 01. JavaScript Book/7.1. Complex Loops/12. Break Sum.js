function breakSum() {

    let hasToEnd = false;

    for (let i = 1; i <= 3; i++) {
        if (hasToEnd === false) {
            for (let j = 3; j >= 1; j--) {
                if (j + i === 2) {
                    hasToEnd = true;
                    break;
                }
                console.log(`${i} ${j}`);
            }
        }
    }
}
breakSum()