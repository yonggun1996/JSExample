// Object 선언 방법
const obj1 = {};
const obj2 = new Object();

const yonggun = { name : 'yonggun', age : 28 };
console.log('yonggun : ', yonggun); // yonggun :  { name: 'yonggun', age: 28 }

// 런타임 중에 새로운 타입 추가 가능
yonggun.sex = 'man';
console.log('yonggun : ', yonggun); // yonggun :  { name: 'yonggun', age: 28, sex: 'man' }

// 런타임 중에 타입 삭제도 가능
delete yonggun.sex;
console.log('yonggun : ', yonggun); // yonggun :  { name: 'yonggun', age: 28 }
