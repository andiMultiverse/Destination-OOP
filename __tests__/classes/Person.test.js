/*
//  Test that you can create an instance of the Person class
// Test that the name and destination have been assigned correctly.
// Test that bags initializes as an empty array.
Test that addBag() adds a bag to the bags array.
In Person.js, create code that meets the following specifications:
Properties
name: The name of the person.
destination: The destination the person is traveling to.
bags: An array of Bag instances assigned to this person. This should initialize as an empty array.
Methods
addBag(bag): Updates the bags array with a bag.
getBags(): Returns the array of bags.
Verify your tests work by running npm test ./__tests__/classes/Person.test.js. */

const Person = require("../../classes/Person.js");

describe(('Person class tests'), () => {
    const person = new Person("andi", "coahuila")
    test('person is an instance of Person', () => {
        expect(person instanceof Person).toBe(true);
    });
    test('destination initialized correctly', () => {
        expect(person.destination).toBe("coahuila");
    });
    test('name initialized correctly', () => {
        expect(person.name).toBe("andi");
    });
    test('bag initializes as an empty array', () => {
        expect(person.bags.length).toBe(0);
    });
    test('addBag updates the array', () => {
        person.addBag("test");
        expect(person.bags.includes("test")).toBe(true);
    })
    test('getBags returns bags array', () => {
        const bags = person.getBags();
        expect(person.getBags()).toEqual(bags);
    })

})

