/**/

// m < n
function makeArray(m) {
	return Array(m).fill().map((e,i)=>i+1);
}

function searchPrime(prevDivider, arr, bound) {
console.log(prevDivider, arr.length, bound);
var divider = arr[arr.indexOf(prevDivider) + 1];
console.log('current divider : ', divider);
return divider <= bound ? searchPrime( divider, arr.filter(el => el%divider || el==divider), bound) : arr;}

function returnFinalTarget(arr, n) {
	return arr.filter(el => el >= n);
}

function test1() {
	var st = performance.now();
	console.log(st);
	var rough = searchPrime(1, makeArray(40000), 200);
	returnFinalTarget(rough, 2000);
	var end = performance.now();
	console.log(end);
	console.log(end - st);
}