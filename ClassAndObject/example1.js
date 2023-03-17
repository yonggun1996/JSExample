class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`${this.name} say : I'm ${this.age} old`)
	}
}

const lee = new Person('lee', 30);
