//javascript 내부 클래스인 Math에 sqrt라는 method가 존재한다.
//이는 제곱근 근사치를 return 하기 때문에 이 method의 결과값이 정수인지 판별하면 될 것이다.
// ++ Number.isInteger() method는 정수인지 판별하는 메소드이다.
// Math.pow(x,y)  --> return x^y
function nextSqaure(n){
  var sqrtVal = Math.sqrt(n);
  return Number.isInteger(sqrtVal) ? Math.pow(sqrtVal+1, 2) : 'no';
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));