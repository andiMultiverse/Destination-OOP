/* 
// Test that you can create an instance of the Bag class
// Test that the weight and id have been assigned correctly.
// owner: The person assigned to a Bag. Initialized with a value of null.
// Verify you can get the initial owner using getOwner.
//Create a test to update owner with a Person assigned to a Bag using assignOwner(). You won’t be able to assign a person until you completing the next section.
*/

const Bag  = require("../../classes/Bag.js");

describe("Bag tests", () => {
  const bag = new Bag(15, 123);
  test("can create an instance of Bag class", () => {
    expect(bag instanceof Bag).toBe(true);
  });
  test("weight correctly assigned", () => {
    expect(bag.weight).toBe(15);
  });
  test("id correctly assigned", () => {
    expect(bag.id).toBe(123);
  });
  test("owner is initialized to null", () => {
    const owner = bag.getOwner();
    expect(owner).toBe(null);
  });
  test("getOwner gets owner property initilalized to null", () => {
    const owner = bag.getOwner();
    expect(owner).toBe(null);
  })
  test("setOwner set's owner correctly", () => {
    bag.setOwner("test");
    const owner = bag.getOwner();
    expect(owner).toBe("test");
  })

});
