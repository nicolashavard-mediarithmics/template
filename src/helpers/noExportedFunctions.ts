/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-unused-vars
const noExportedFunction = (param: string): string => {
    if (param === "case1") {
        return "response1";
    } else if (param === "case2") {
        return "response2";
    } else {
        return "defaultResponse";
    }
};