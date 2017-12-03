/*말 그대로 str을 Integer로 파싱*/

//나의 답
function strToInt(str) {
    return parseInt(str);
}

//다른 감명깊은 풀이
//자바스크립트의 동작원리를 알고 있다면 이런 알고리즘은 누워서 떡먹기인듯 싶다.

function strToInt(str) {
    return +str;
}
function strToInt(str) {
    return str / 1
}
function strToInt(str) {
    return str - 0;
}
function strToInt(str) {
    return str * 1;
}
