import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Footer from "../Footer";
import store from "../../../redux/store";

describe("Footer tests", () => {
  it("Render Footer", async () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const component = await screen.findByTestId(/footer/i);
    expect(component).toBeInTheDocument();
  });
});
