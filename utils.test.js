import equals from "./utils.js";

describe("Given the compareTwoValues function", () => {
    describe("When it receives as values, 1 and 1", () => {
        test("Then it should return the result true", () => {
            const valueA = 1;
            const valueB = 1;
            const equality = equals(valueA, valueB)
            const expectedResult = true;

            expect(equality).toBe(expectedResult);
        });
    });

    describe("When it receives as values, NaN and NaN", () => {
        test("Then it should return the result false", () => {
            const valueA = NaN;
            const valueB = NaN;
            const equality = equals(valueA, valueB)
            const expectedResult = false;

            expect(equality).toBe(expectedResult);
        })
    })

    describe("When it receives as values, 0 and -0", () => {
        test("Then it should return the result true", () => {
            const valueA = 0;
            const valueB = -0;
            const equality = equals(valueA, valueB)
            const expectedResult = true;
        })
    })

    describe("When it receives as values, -0 and 0", () => {
        test("Then it should return the result true", () => {
            const valueA = -0;
            const valueB = 0;
            const equality = equals(valueA, valueB)
            const expectedResult = true;
        })
    })

    describe("When it receives as values, 1 and '1'", () => {
        test("Then it should return the result false", () => {
            const valueA = 1;
            const valueB = "1";
            const equality = equals(valueA, valueB)
            const expectedResult = false;
        })
    })

    describe("When it receives as values, true and false", () => {
        test("Then it should return the result false", () => {
            const valueA = true;
            const valueB = false; 
            const equality = equals(valueA, valueB)
            const expectedResult = false;
        })
    })

    describe("When it receives as values, false and false", () => {
        test("Then it should return the result true", () => {
            const valueA = false;
            const valueB = false;
            const equality = equals(valueA, valueB)
            const expectedResult = true;
        })
    })

    describe("When it receives as values, 'Water' and 'oil'", () => {
        test("Then it should return the result false", () => {
            const valueA = "Water";
            const valueB = "oil";
            const equality = equals(valueA, valueB)
            const expectedResult = false;
        })
    })
});

