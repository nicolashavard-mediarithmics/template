import { assert, expect } from "chai";
import { exportedFunction } from "../../src/helpers/exportedFunctions";

describe("exportedFunctions", (): void => {
    describe("exportedFunction", (): void => {
        it("assert with case1", (): void => {
            assert.equal(exportedFunction("case1"), "response1");
        });
        it("expect to equal defaultResponse", (): void => {
            expect(exportedFunction("case3")).to.equal("defaultResponse");
        });
    });
});