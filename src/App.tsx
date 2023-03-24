import React from "react";
import "./App.css";
import RouterController from "./RouterController";
import MainContainer from "./container/MainContainer";
import store from "./redux";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <MainContainer>
        <RouterController />
      </MainContainer>
    </Provider>
  );
}

export default App;
