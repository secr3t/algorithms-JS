// 주어진 약수의 합을 구하여라.
function sumDivisor(num) {
    var answer = 0;
  for(var i = num; i > 0; i--) {
        if(num % i == 0) {
        answer += i;
    }
  }
    return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumDivisor(12));