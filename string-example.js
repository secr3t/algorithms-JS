/*alpha_string46함수는 문자열 s를 매개변수로 입력받습니다.
s의 길이가 4혹은 6이고, 숫자로만 구성되있는지 확인해주는 함수를 완성하세요.
예를들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다*/

// 이전에는 if, else 로만 string을 다뤄왔던 반면에 정규표현식도 공부할 필요를 느껴
// string을 다루는 데에는 정규표현식 만한게 없다고 생각하여 정규표현식을 사용하여 해결하는
// 풀이가 증가할 것으로 보인다.

function alpha_string46(s){
	return (s.length == 4 || s.length == 6 && !isNaN(s)) ? true : false;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("a234") );