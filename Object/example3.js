const person1 = { name: 'wonyoung', age: 20 };
const person2 = { name: 'youjin', age: 21 };
const person3 = { name: 'eseo', age: 17 };
const person4 = new Person('ray', 19);
console.log('person4 : ', person4);// Person { name: 'ray', age: 19 }

function Person(name, age){
	this.name = name;
	this.age = age;
}