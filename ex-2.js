//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let passedCount = 0;
  for (let score of array) {
    passedCount += operation(score);
  }
  if (passedCount >= 5) {
    return `ผ่านเกณฑ์ ✅`;
  }
  return `ไม่ผ่านเกณฑ์ ❌`;
}

function isPassed(score) {
  return score > 70 ? 1 : 0;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = `นักเรียนห้องที่ 1 ${atLeastFive(
  studentScoresRoom1,
  isPassed
)}`;

let scoreRoom2Result = `นักเรียนห้องที่ 2 ${atLeastFive(
  studentScoresRoom2,
  isPassed
)}`;

let scoreRoom3Result = `นักเรียนห้องที่ 3 ${atLeastFive(
  studentScoresRoom3,
  isPassed
)}`;

console.log(scoreRoom1Result);

console.log(scoreRoom2Result);

console.log(scoreRoom3Result);
