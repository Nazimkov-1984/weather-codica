import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import SearchPanel from "../SearchPanel";
import store from "../../../redux/store"

describe("Search Panel tests", () => {
  it("Render Search Panel", async () => {
    render(
      <Provider store={store}>
        <SearchPanel />
      </Provider>
    );
    const component = await screen.findByTestId(/searchpanel/i);
    expect(component).toBeInTheDocument();
  });
});
