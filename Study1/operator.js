'use strict';

// 문자열 합하기
console.log('Java' + 'script');
console.log('20' + 23);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// 숫자연산
console.log(1 + 1);
console.log(1 - 1);
console.log(5 / 3);
console.log(5 * 3);
console.log(5 % 3);
console.log(5 ** 3);// 5의 3승

// 증감연산자
let cnt = 2;
const cnt1 = ++cnt;//연산증가 후 값 삽입
const cnt2 = cnt++;//값 삽입 후 연산증가

console.log(`cnt1 : ${cnt1} / cnt2 : ${cnt2}`);

// 로직 연산 (or, and, not)
const value1 = false;
const value2 = 4 < 2;

// or연산 결과
console.log(`or : ${value1 || value2 || check()}`);

// 참고로 or연산은 위 로직을 예시로 했을 때 앞의 변수가 true가 나온다면 더이상의 연산을 하지 않는다.
// tip : check()같이 연산이 오래걸리는 함수는 앞에 두는것이 아닌 변수 비교 후 함수를 호출한다.

// and연산 결과
console.log(`and : ${value1 && value2 && check()}`);

// null check에서도 사용된다.
// nullableObject && nullableObject.value
// nullableObject가 null이 아니면 변수를 할당하게 된다.

function check(){
	let str = '';
	for(let i = 0; i < 100; i++){
		str += '-';
	}
	console.log(str);
	return true;
}

// not 연산은 true <-> false로 바뀌게 된다.

// equality
// == : 타입 상관 없이 값이 같다면 true로 변환
// === : 값과 타입이 모두 같으면 true로 변환

const strFive = '5';
const numFive = 5;

console.log(`strFive == numFive : ${strFive == numFive}`);// true
console.log(`strFive == numFive : ${strFive === numFive}`);// false

// object 동등비교
const park1 = {name : 'YG'};
const park2 = {name : 'YG'};
const park3 = park1;

console.log(park1 == park2);// referenct가 다르다
console.log(park1 === park2);
console.log(park1 === park3);// reference가 같다.

for(let i = 0; i <= 10; i++){
	if(i % 2 === 1) continue;
	console.log(i);
}

console.log('----------------------------------------------');

for(let i = 0; i <= 10; i++){
	if(i === 8) break;
	console.log(i);
}