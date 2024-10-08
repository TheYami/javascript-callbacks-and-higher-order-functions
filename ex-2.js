//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let scoreMoreThan70 = 0;
  for(let i = 0; i < array.length; i++){
    if(operation(array[i])){
      scoreMoreThan70++;
    }
  }
  if(scoreMoreThan70 >= 5){
    return "ผ่านเกณฑ์ ✅"
  }else{
    return "ไม่ผ่านเกณฑ์ ❌"
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result = `นักเรียนห้องที่ 1 ${atLeastFive(studentScoresRoom1,function(score){
  return score >= 70;
})}`;

scoreRoom2Result = `นักเรียนห้องที่ 2 ${atLeastFive(studentScoresRoom2,function(score){
  return score >= 70;
})}`;

scoreRoom3Result = `นักเรียนห้องที่ 3 ${atLeastFive(studentScoresRoom3,function(score){
  return score >= 70;
})}`;




console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);