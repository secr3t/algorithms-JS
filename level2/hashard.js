/*양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.

Harshad함수는 양의 정수 n을 매개변수로 입력받습니다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하세요.
예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴하면 됩니다.*/

function Harshad(n){
  //함수를 완성하세요


  return !(n % Array.from(n.toString()).map( el => el*1 ).reduce( (acc, curVal) => (acc+=curVal) )) ;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(Harshad(18))

/*
	Array.from(str) ==> asdf를 ['a', 's', 'd', 'f']로 만들어준다.
	위의 array를 map을 사용하여 각 요소에 1을 곱하여 정수로 만들어준다.(js의 약한 type 덕분에 가능.)
	map을 통하여 나온 array에 reduce를 사용하여 해당 요소의 합을 구한다.
	그리고 그것을 n의 제수로 사용하여 나누어 떨어지는지 확인한다.
*/