/*phonenumber가 주어지면 맨 뒤 4자리를 제외하고 *로 치환하는 함수를 작성한다.*/

//String.prototype.replace()를 확인하여보면
//str.replace(regexp|substr, newSubStr|function)
//의 형식을 가진다. newSubStr 대신 callback 함수를 지정해주면
//이 함수에서 사용할 수 있는 몇 가지 매개변수가 존재하는데
/*
match	매치된 문자열. (윗쪽의 $& 표현식으로 매치된 경우와 동일합니다.)
p1, p2, ...	윗쪽의 $n 표현식과 동일합니다. ($1은 p1, $2는 p2...) 예를 들어, 만약 정규표현식 /(\a+)(\b+)/ 이 주어진다면 p1은 \a+와 매치되고 p2는 \b+와 매치됩니다.
offset	조사된 전체 문자열 중에서 매치된 문자열의 index.(예를 들어, 조사될 전체 문자열이 abcd이고, 매치된 문자열이 bc면 이 매개변수의 값은 1이 됩니다.)
string	조사된 전체 문자열 (replace를 호출한 string)
*/
//따라서 offset을 사용하여 length와 비교한 수에 return을 해주면 될 듯하다.
function hide_numbers(s){
  var result = ""
  //함수를 완성해주세요
  // match한 횟수가 length - 4일 때 return 한다.
  var length = s.length;
  return s.replace(/\d/g, function(match, offset, string) { console.log(match, offset, string, length); return offset < (length-4) ? '*' : match } );
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));


//다른 사람의 정규식 풀이.
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));