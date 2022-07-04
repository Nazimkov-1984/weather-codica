import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App";
import ModalInfo from "./components/ModalInfo/ModalInfo";
import ReactDOM from "react-dom";
//@ts-ignore
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {
      ReactDOM.createPortal(<ModalInfo />, document.getElementById("modal") as HTMLElement)}
      <BrowserRouter basename="/codiwea">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
