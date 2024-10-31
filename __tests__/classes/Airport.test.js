const Airport = require("../../classes/Airport");

describe("Airport", () => {
  it("should create an instance of Airport", () => {
    const airport = new Airport("Airport A");
    expect(airport).toBeInstanceOf(Airport);
  });

  it("should assign name correctly", () => {
    const airport = new Airport("Airport A");
    expect(airport.name).toBe("Airport A");
  });

  it("should initialize planes as an empty array", () => {
    const airport = new Airport("Airport A");
    expect(airport.getPlanes()).toEqual([]);
  });

  it("should add Plane objects to the planes array", () => {
    const airport = new Airport("Airport A");
    const plane = { company: "Airline A" };
    airport.addPlane(plane);
    expect(airport.getPlanes()).toContain(plane);
  });
});
