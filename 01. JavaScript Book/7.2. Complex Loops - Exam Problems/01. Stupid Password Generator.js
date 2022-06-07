function stupidPasswordGenerator(input) {

    let num = Number(input[0]);
    let charCodeNum = Number(input[1]);
    let solution = ``;


    for (let s1 = 1; s1 <= num; s1++) {
        for (let s2 = 1; s2 <= num; s2++) {
            for (let ch1 = `a`.charCodeAt(0); ch1 < `a`.charCodeAt(0) + charCodeNum; ch1++) {
                let s3 = String.fromCharCode(ch1);
                for (let ch2 = `a`.charCodeAt(0); ch2 < `a`.charCodeAt(0) + charCodeNum; ch2++) {
                    let s4 = String.fromCharCode(ch2);
                    for (let s5 = Math.max(s1, s2) + 1; s5 <= num; s5++) {
                        solution += `${s1}${s2}${s3}${s4}${s5} `;
                    }
                }
            }
        }
    }
    console.log(solution);
}
// stupidPasswordGenerator([`2`,`4`]);
// stupidPasswordGenerator([`4`,`2`]);
stupidPasswordGenerator([`3`,`2`]);
