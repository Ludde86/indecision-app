class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		// return 'Hi ' + this.name + '!';

		// template string
		return `Hi. I am ${this.name}!`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();
		if (this.hasMajor()) {
			return description + ` Thier major is ${this.major}`;
		}
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	getGreeting() {
		let greeting = super.getGreeting();
		if (this.homeLocation) {
			return greeting + ` I am visiting from ${this.homeLocation}.`;
		}
		return greeting;
	}
}

const me = new Traveler('Ludvig Björn', 33, 'Stockholm');
// console.log(me);
// console.log(me.hasMajor());
// console.log(me.getGreeting());
console.log(me.getGreeting());

const other = new Traveler();
// console.log(other);
// console.log(other.hasMajor());
// console.log(other.getGreeting());
console.log(other.getGreeting());
