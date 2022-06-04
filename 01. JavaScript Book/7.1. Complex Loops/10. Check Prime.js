function checkPrime(input) {

    let num = Number(input[0]);
    let prime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime && num > 2) {
        console.log(`Prime`); 
    } else {
        console.log(`Not Prime`);
    }
}
checkPrime([`47`])