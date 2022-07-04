import "@testing-library/jest-dom";
import getTime from "../getTime";


describe("getTime tests", () => {
  it("getTime test without params", async () => {
expect(getTime()).toEqual("Invalid Date")
  });
   it("getTime test with params", async () => {
     expect(getTime(6546546464)).toEqual("08:07");
   });
   it("getTime test with incorrect params", async () => {
     expect(getTime("25452544524582")).toEqual("Invalid Date");
   });
    it("getTime test with undefined params", async () => {
      expect(getTime(undefined)).toEqual("Invalid Date");
    });
    it("getTime test with incorrect params(string)", async () => {
      expect(getTime("8 July 2022")).toEqual("Invalid Date");
    });
});
