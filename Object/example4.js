const user = { name: 'park', num: 7 };
const user3 = Object.assign({}, user);
const user2 = user;
user2.name = 'lee';
console.log(user); // { name: 'lee', num: 7 }
console.log(user3); // { name: 'park', num: 7 }

const ball1 = { color: 'red' };
const ball2 = { color: 'blue', retangle: 10 };
const mixed = Object.assign({}, ball1, ball2);//동일한 프로퍼티는 덮어 씌운다.
console.log(mixed.color);//blue
console.log(mixed.retangle);//10