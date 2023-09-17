import { getCurrencies } from "./getCurrencies"

describe("getCurrencies",() => {
    it("should contain all currencies", () => {
        expect(getCurrencies()).toContain("USD");
        expect(getCurrencies()).toContain("AUD");
        expect(getCurrencies()).toContain("EUR");
    })
})