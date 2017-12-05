// 삼각혐 출력하기


/* function printTriangle(num) {
  var answer = '';
  for(var i = 1; i <= num; i++) {
    answer += '*'.repeat(i) + '\n';
  }
  return answer;
}*/

var printTriangle = (num => num < 1 ? '' :  printTriangle(num-1) + '*'.repeat(num) + '\n')
// 이진님 printReversedTriangle 참고 + 화살표 함수 연습
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( printTriangle(3) );