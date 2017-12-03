/*
피보나치 수는 F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 점화식입니다. 2 이상의 n이 입력되었을 때, fibonacci 함수를 제작하여 n번째 피보나치 수를 반환해 주세요. 예를 들어 n = 3이라면 2를 반환해주면 됩니다.*/


// 이전에 시도했던 문제 해결 방식은 대게가 Recursion만을 사용해서 해결하였다.
// 하지만 많은 코딩테스트를 겪어보니 Running Time 에서 timeout을 반환하는 경우가 많아 처음부터 다시 Dynamic programming을
// 이용하여 문제를 풀이해보는 시간을 가질 것이다.
var fibList = [];

function fibonacci(num) {
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    if (num < fibList.length) {
        return fibList[num];
    } else {
        fibList[num] = fibonacci(num - 1) + fibonacci(num - 2);
        return fibList[num];
    }

}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3))
console.log(fibonacci(7))
console.log(fibonacci(380))