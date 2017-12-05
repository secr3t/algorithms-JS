/*최대공약수, 최소공배수를 구하는 문제*/

function gcdlcm(a, b) {
  var answer = [];
  var x = a > b ? a : b;
  var y = a > b ? b : a;
  var r = 0;
    while (y != 0)
    {
     r = x%y;
     x = y;
     y = r;
   }
  answer.push(x);
  answer.push(a*b/x);
    return answer;
}
