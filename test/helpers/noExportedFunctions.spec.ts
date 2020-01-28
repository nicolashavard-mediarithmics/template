import { assert, expect } from "chai";
import rewire from "rewire";

describe("noExportedFunctions", (): void => {
    const noExportedFunctions = rewire("../../src/helpers/NoExportedFunctions");
    describe("noExportedFunction", (): void => {
        const noExportedFunction = noExportedFunctions.__get__("noExportedFunction");
        it("assert with case1", (): void => {
            assert.equal(noExportedFunction("case1"), "response1");
        });
        it("expect to equal defaultResponse", (): void => {
            expect(noExportedFunction("case3")).to.equal("defaultResponse");
        });
    });
});