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