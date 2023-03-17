(function hello() {
	console.log('IIFE');
})();

/* 사칙연산 함수 */
function calculate(command, a, b) {
	if(command !== 'add' 
		&& command !== 'substract' 
		&& command !== 'divide'
		&& command !== 'multiply'
		&& command !== 'remainder'){
		return 'Can not calculate';
	}

	if(command === 'add') {
		return a + b;
	}

	if(command === 'substract') {
		return a - b;
	}

	if(command === 'divide') {
		return a * b;
	}

	if(command === 'multiply') {
		return a / b;
	}

	if(command === 'remainder') {
		return a % b;
	}
}

console.log(calculate('add', 20, 5));
console.log(calculate('substract', 20, 5));
console.log(calculate('divide', 20, 5));
console.log(calculate('multiply', 20, 5));
console.log(calculate('remainder', 20, 5));
console.log(calculate('anything', 20, 5));