function worldSwimmingRecord(input) {
  let recordInSec = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeInSec = Number(input[2]);

  let mustSwim = distanceInMeters * timeInSec;
  let resistanceOfWater = Math.floor(distanceInMeters / 15) * 12.5;
  let totalTime = mustSwim + resistanceOfWater;

  if (recordInSec <= totalTime) {
    totalTime = totalTime - recordInSec;
    console.log(
      `No, he failed! He was ${Math.abs(totalTime).toFixed(2)} seconds slower.`
    );
  } else if (totalTime < recordInSec) {
    console.log(
      `Yes, he succeeded! The new world record is ${Math.abs(totalTime).toFixed(
        2
      )} seconds.`
    );
  }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
