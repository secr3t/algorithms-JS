/*어떤 행렬이든 덧셈을 시행할 수 있는 행렬덧셈 method를 작성하라*/

function sumMatrix(A,B){
  console.log(A);
  console.log(B);
  var first = A.length;
  var second = A[0].length;
  var answer = [];
  for(var i = 0; i < first; i++) {
    answer[i] = [];					// javascript의 배열에서 해당 인덱스마다 배열이 들어갈 공간이라는 것을 명시해주지 않으면 오류가 발생한다.
  	for(var j = 0 ; j < second; j++) {
      answer[i][j] = A[i][j]+B[i][j];
    }
  }
  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))


// 다른사람의 인상깊은 풀이

function sumMatrix(A,B){
    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}

// 해당 풀이의 return 은 화살표함수로 구현되어 있는데 이를 풀어 쓰자면

/*
	A.map( function(a, i) {
		return a.map(function(b, j) {
			return b+B[i][j];
		})
	})
*/

// Array.prototype.map() --> 배열 내의 모든 요소 각각에 대하여  제공된 함수(callback)를 호출하고, 그 결과를 모아서,  새로운 배열을 반환합니다.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map