function factorial(input){

    let num = Number(input[0]);
    let fact = 1;

    do {
        fact = fact * num;
        num--;
        
    } while ( num >1);
    console.log(fact);

}
factorial([`5`])