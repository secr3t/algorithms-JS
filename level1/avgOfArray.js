//return average of array

function average(array){
  /*var sum = 0;
  array.map(function(element) { sum += element;})

  return sum / array.length;*/
  // return array.reduce(function(accumulator, currentValue) { return accumulator + currentValue}) / array.length;
  return array.reduce((accumulator, currentValue) => (accumulator + currentValue)) / array.length;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [5,3,4]
console.log("평균값 : " + average(testArray));