/*어떤 행렬이든 덧셈을 시행할 수 있는 행렬덧셈 method를 작성하라*/

function sumMatrix(A,B){
  var answer;
  for(var i = 0; i < A.length; i++) {
  	for(var j = 0 ; j < A[i].length; j++) {
    A[j][i]+B[j][i]
    }
  }
  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))