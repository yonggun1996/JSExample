'use strict';

// 변수
// let (es6에 추가된 문법)

// let name = 'yonggun';
// console.log(name); // yonggun
// name = 'hello';
// console.log(name); // hello

// block scope
let global = 'global'; // 모든 구간에서 호출 가능, 프로그램이 끝날 때 까지 메모리에서 남아있다.
{
    // block 안에서 선언한 변수들은 block 밖에서 확인할 수 없다.
    let name = 'yonggun';
    console.log('global : ' + global);
    console.log(name); // yonggun
    name = 'hello';
    console.log(name); // hello
}
console.log('global : ' + global);
// console.log(name); // error -> 해당 block 안에만 쓸 수 있는 변수를 전역에서 호출하면 에러발생

// var
// 호이스팅 : 변수를 선언하기 전에 사용할 수 있다는 것을 말한다.
// 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려준다.
// block을 지원하지 않는다.
console.log('age : ' + age); // undefiend
age = 4;
var age;

// const
// 한번 할당하면 값이 바뀌지 않는다.
// 장점1 : 보안상의 이유
// 장점2 : 안전하게 스레드가 작동된다. -> 동시에 값이 변경되지 않는다는 점이 장점
// 장점3 : 코드 변경시 실수를 방지할 수 있다.

// Variable types
// primitive type : 변수가 더 이상 작은 단위로 나뉠 수 없는 한가지 단위. (숫자, 문자, null, undefiend)
// primitive type의 변수를 여러개 담아 하나로 묶을 수 있는 단위
// function도 datatype중 하나다.

// number
// js는 타 언어와 달리 모든 숫자가 number type을 가지게 된다.
let num1 = 10;
let num2 = 10.5;
console.log(`num1 : ${num1} / num2 : ${num2}`);
console.log(`num1 : ${typeof num1} / num2 : ${typeof num2}`); // 둘다 number

// string
let str1 = 'c';
let str2 = '++';
let lan = str1 + str2;
console.log(`str1 : ${str1} / str2 : ${str2} / lan : ${lan}`);
console.log(`str1 : ${typeof str1} / str2 : ${typeof str2}`);

let str3 = 'hello';
let num3 = 100;
let str4 = str3 + num3;
console.log(`str4 : ${str4} / ${typeof str4}`);

// false <- 0, null, undefiend, NaN, ''
// true <- any other value

// null undefiend
let x = null;
let y = undefined; // let = x;와 동일

// null은 빈 값이 변수에 할당된 상태
// undefiend는 아예 아무 값도 들어가있지 않은 상태

// dynamic type language : 변수 선언시 어떠한 타입인지 런타임 시 할당된 값에 따라 변경되는 언어
let text = 'text';
console.log(`value : ${text} / type : ${typeof text}`);// string

text = 30;
console.log(`value : ${text} / type : ${typeof text}`);// number

text = '8' / '2';
console.log(`value : ${text} / type : ${typeof text}`);// number
