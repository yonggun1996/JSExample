// push
const fruits = ['apple', 'banana'];
fruits.push('peach');
console.log(fruits); // [ 'apple', 'banana', 'peach' ]


// pop
fruits.pop();
console.log(fruits); // [ 'apple', 'banana' ]


// 앞에서 push, pop
fruits.unshift('melon');
console.log(fruits); // [ 'melon', 'apple', 'banana' ]

fruits.shift();
console.log(fruits); // [ 'apple', 'banana' ]

// shift / unshift는 느리다.
// 자료구조 특정 상 앞에 데이터를 삽입하면 기존의 데이터들이 뒤로 shift 해야하기 때문.

// 삭제 splice
fruits.push('grape');
fruits.push('lemon');
fruits.push('mango');
console.log(fruits);

// fruits.splice(1);
// console.log(fruits);// [ 'apple' ]

fruits.splice(1, 1);
console.log(fruits);// [ 'apple', 'grape', 'lemon', 'mango' ]

// 두 배열 묶기
const fruit2 = ['pear', 'watermelon'];
const newFruit = fruits.concat(fruit2);
console.log(newFruit);// [ 'apple', 'grape', 'lemon', 'mango', 'pear', 'watermelon' ]

// 검색
console.log(newFruit.indexOf('pear'));//4
console.log(newFruit.includes('shinemersckat'));//false(해당 값이 없다는 뜻)

// 같은 값을 추가 후 인덱스 리턴
newFruit.push('apple');
console.log(newFruit.indexOf('apple'));//0
console.log(newFruit.lastIndexOf('apple'));//6