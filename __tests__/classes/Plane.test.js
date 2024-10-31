const Plane = require("../../classes/Plane");

describe("Plane", () => {
  it("should create an instance of Plane", () => {
    const plane = new Plane("Airline A", "Airport A", "Airport B");
    expect(plane).toBeInstanceOf(Plane);
  });

  it("should assign company, origin, and destination correctly", () => {
    const plane = new Plane("Airline A", "Airport A", "Airport B");
    expect(plane.company).toBe("Airline A");
    expect(plane.origin).toBe("Airport A");
    expect(plane.destination).toBe("Airport B");
  });

  it("should initialize passengers as an empty array", () => {
    const plane = new Plane("Airline A", "Airport A", "Airport B");
    expect(plane.getPassengers()).toEqual([]);
  });

  it("should add a passenger to the passengers array", () => {
    const plane = new Plane("Airline A", "Airport A", "Airport B");
    const passenger = { name: "John Doe" };
    plane.addPassenger(passenger);
    expect(plane.getPassengers()).toContain(passenger);
  });
});
