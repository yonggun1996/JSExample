/* 일반적인 방법으로 사용한 function */
const multiplex1 = function (num1, num2) {
	return num1 * num2;
}

/* arrow function */
const multiplex2 = (num1, num2) => num1 * num2;

console.log('multiplex1 : ', multiplex1(2, 5)); // 10
console.log('multiplex2 : ', multiplex1(2, 5)); // 10