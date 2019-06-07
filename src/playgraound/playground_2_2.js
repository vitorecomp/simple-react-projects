class Person {
	_name;

	constructor(name = 'Anonymous', age = 0) {
		this._name = name;
		this._age = age
	}

	getGretting() {
		return `Hi. I am ${this._name}!`
	}

	getDescription() {
		return `${this._name} is ${this._age} years(s) old.`
	}
}

const me = new Person('Vitor de Araujo', 10);
console.log(me.getGretting())
console.log(me.getDescription())

const other = new Person();
console.log(other.getGretting())
console.log(other.getDescription())