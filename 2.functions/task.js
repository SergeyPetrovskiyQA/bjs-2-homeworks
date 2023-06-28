'use strict'
function getArrayParams(...arr) {
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr); 
  
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

  return { min: min, max: max, avg: Number(avg) };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if(arr.length === 0){
    return 0;
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr); 
  if(arr.length === 0){
    return 0;
  }
  let diff = max - min;
  return diff;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if(num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }
  let diff = sumEvenElement - sumOddElement
  return diff;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (arr[i] % 2 ===0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    } 
    if (countEvenElement === 0) {
      return 0;
    }
  }
  let avg = sumEvenElement / countEvenElement;
    return avg
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let element = arrOfArr[i];
    let result = func(...element);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;

}
