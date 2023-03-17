class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	get age() {
		return this._age;
	}

	set age(age) {
		this._age = (age < 0) ? 0 : age;
	}
}

const user1 = new User('Jery', 'royster', -1); // 나이가 -1?
console.log(user1.age);