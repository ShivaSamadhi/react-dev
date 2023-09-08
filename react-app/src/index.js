const person = {
	name: "Ramaj",
	walk() {
		console.log(this)
	}
};

//console.log(person.walk)

const walk = person.walk.bind(person)
//walk()
//person.walk()

const square = (number) => number ** 2

//Array.map()
const colors = ['red', 'green', 'blue']
const listItems = colors.map(color => `<li> ${color} <li>`)

//Object Destructuring
const address = {
	street: ``,
	city: ``,
	country: ``
}

const {street, city, country} = address

//Spread Operator
const first = [1,2,3]
const second = [4,5,6]

const combined = [...first, ...second]
	//works w/ arrays and objects

//Classes
class Person {
	constructor(name) {
		this.name = name
	}
	walk() {
		console.log("walk")
	}
}

const Ramaj = new Person("Ramaj")

//Inheritance
class Teacher extends Person {
	constructor(name, degree) {
		super(name);
		this.degree = degree;
	}
	teach(){
		console.log("teach")
	}
}