function sunGlasses(input) {

    let num = Number(input[0]);

    let topLine = `*`.repeat(num * 2);
    topLine += ` `.repeat(num);
    topLine += `*`.repeat(num * 2);
    console.log(topLine);

    let middleFrame = 0;

    if (num % 2 == 0) {
        middleFrame = Math.floor((num / 2) - 1);
    } else {
        middleFrame = Math.ceil((num / 2) - 1);
    }

    for (let i = 1; i <= num - 2; i++) {
       
        let middleLine = ``;
        if (i === middleFrame) {
            middleLine += `|`.repeat(num);
        } else {
            middleLine += ` `.repeat(num);
        }
  
        
        let frame = `*`;
        for (let j = 1; j <= 2 * num - 2; j++) {
            frame += `/`;
        }
        frame += `*`;
        console.log(frame + middleLine + frame);

    }
    let bottomLine = `*`.repeat(num * 2);
    bottomLine += ` `.repeat(num);
    bottomLine += `*`.repeat(num * 2);

    console.log(bottomLine);
}
sunGlasses([`5`])

