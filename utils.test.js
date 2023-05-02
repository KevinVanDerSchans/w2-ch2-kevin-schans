import equals from "./utils.js";

describe("Given a strictEquals function", () => {
    describe("When it receives as values, 1 and 1", () => {
        test("Then it should return true", () => {
            const valueA = 1;
            const valueB = 2;
            const expectedResult = false;

            const equality = equals(valueA, valueB)

            expect(equality).toBe(expectedResult);
        });
    });
});
