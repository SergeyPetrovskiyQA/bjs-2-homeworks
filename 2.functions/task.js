'use strict'
function getArrayParams(...arr) {
  let sum = 0;
  min = Math.min(...arr);
  max = Math.max(...arr); 
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
    sum += arr[i]
  } 
  avg = (sum / arr.length).toFixed(2); 

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
