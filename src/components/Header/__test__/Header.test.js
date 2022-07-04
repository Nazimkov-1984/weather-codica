import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header";
import store from "../../../redux/store";

describe("Header tests", () => {
  it("Render Header", async () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const component = await screen.findByTestId(/header/i);
    expect(component).toBeInTheDocument();
  });
});
