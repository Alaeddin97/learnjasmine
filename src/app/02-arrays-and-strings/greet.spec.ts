import { greet } from "./greet"

describe("greet",() => {
    it("should include the name in the message",() => {
        const name = "alaeddine";
        const result = greet(name);
        expect(result).toContain(name);
    })
})