/*
------Properties
weight: The weight of the bag.
id: An id for the bag.
owner: Is a PRIVATE property that will hols an instance of Person, should be initialized with a null value.
------Methods
getOwner(): Returns the Person assigned to the bag.
assignOwner(person) Updates owner with a person assigned to a Bag.
Verify your tests work by running npm test ./__tests__/classes/Bag.test.js. */ 

class Bag {
    #owner
    constructor(weight, id) {
        this.weight = weight;
        this.id = id;
        this.#owner = null;
    }

    getOwner() {
        return this.#owner;
    }

    setOwner(person) {
        this.#owner = person;
    }
}


module.exports = Bag;