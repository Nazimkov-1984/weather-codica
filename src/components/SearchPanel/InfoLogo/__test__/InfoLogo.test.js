import { fireEvent, render, screen } from "@testing-library/react";
import InfoLogo from "../InfoLogo";
import { Provider } from "react-redux";
import store from "../../../../redux/store";
import "@testing-library/jest-dom";

describe("Info Logo tests", () => {
  it("Render Info Logo", async () => {
    render(
        <Provider store={store}>
    <InfoLogo />
    </Provider>
    );
    const component = await screen.findByTestId(/infologo/i);
    expect(component).toBeInTheDocument();
  });
   it("Render Info click", async () => {
     render(
       <Provider store={store}>
         <InfoLogo />
       </Provider>
     );
     const component = await screen.findByTestId(/infologo/i);
     fireEvent.click(component);
     const state = store.getState();
     expect(state.cityWeather.isOpenModal).toEqual(true)
   });
});
