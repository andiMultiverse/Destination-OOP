class Person {
    constructor(name, destination) {
        this.name = name;
        this.destination = destination;
        this.bags = [];
    }
    addBag(bag) {
        this.bags.push(bag);
    }
    getBags() {
        return this.bags;
    }
}

const person = new Person("andi", "coahuila")
person.addBag("test");
const bags = person.getBags();
console.log(bags);

module.exports = Person;