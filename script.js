'use strict';

function repeat(fn,n){
  for(let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('hello world');
}
function goodbye() {
  console.log('Goodbye world');
}

// repeat(hello, 5);
// repeat(goodbye, 2);

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

function filter(arr,fn) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])){
      newArray.push(arr[i]);
    }
  }
  // TASK: Define your function here
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:


// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

// console.log(filteredNames); 
// => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function (location) {
    warningCounter++; 
    console.log(`DANGER! DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
 
}

// const rocksWarning = hazardWarningCreator('Rocks on the Road');

// rocksWarning('pizza parlor');
// rocksWarning('that one house');
// rocksWarning('your daddy\'s apartment');

let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
// function forwardandLeft(value){
//   return value[0] >= 0 && value[1] >= 0;
// }

// let turtleFiltered = turtleSteps.filter(forwardandLeft);

// function mapping(step){
//   return step[0] + step[1];
// }

// let turtleMap = turtleFiltered.map(mapping); 
// console.log(turtleMap);


// function stepCount(step,i){
//   console.log(` Movement #${i + 1}: ${step} steps`);
// }

// turtleMap.forEach(stepCount);

function filterOut(step) {
  return step[0] >= 0 && step[1] >= 0;
}
let filtered = turtleSteps.filter(filterOut);
console.log(filtered);

let filtering = turtleSteps.filter(step => step[0] > 0 && step[1] > 0);
console.log(filtering);

// function mapped(step){
//   return step[0] + step[1];
// }

// let mapping = filtered.map(mapped);
// console.log(mapping);

// function stepTracked(step, num) {
//   console.log(` Movement #${num + 1}: ${step} steps`);
// }

// mapping.forEach(stepTracked);


let sentence = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'

