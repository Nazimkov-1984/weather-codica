import "@testing-library/jest-dom";
import formatDate from "../formatDate";

describe("formatDate tests", () => {
  it("formatDate test with correct params", async () => {
    const currentDate = new Date(64654646464654);
    expect(formatDate(currentDate)).toEqual("Oct 28 , Sunday. ");
  });
  it("formatDate test without params", async () => {
    expect(formatDate()).toEqual("undefined undefined , undefined. ");
  });
});
