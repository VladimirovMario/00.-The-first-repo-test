function hospital(input) {

    let days = Number(input[0]);

    let countDoctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let day = 1; day <= days; day++) {

        let countPatiens = Number(input[day]);

        if (day % 3 === 0 && (untreatedPatients > treatedPatients)) {
            countDoctors++
        }
        if (countPatiens > countDoctors) {
            treatedPatients += countDoctors
            untreatedPatients += countPatiens - countDoctors
        } else {
            treatedPatients += countPatiens
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital([`6`, `25`, `25`, `25`, `25`, `25`, `2`]);
// hospital([`4`, `7`, `27`, `9`, `1`]);
// hospital([`3`, `7`, `7`, `7`,]);