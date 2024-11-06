//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  if (operation(array).length >= 5) {return "pass"} else {return "fail"}
}

function moreThanSeventy(score) {
  let result = []; 
  for (let item of score) {if (item > 70) {result.push(item)}}; 
  return result};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, moreThanSeventy);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, moreThanSeventy);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, moreThanSeventy);

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)