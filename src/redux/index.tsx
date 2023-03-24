import { configType } from "../types";
import { createStore } from "redux";

// Define the types for your actions
interface SetAction {
  type: "SET";
  payload: configType;
}
const init: configType = {
  id: 1,
  logo: "https://img.innoloft.de/logo.svg",
  mainColor: "#272e71",
  hasUserSection: true,
};

// Create your reducer
const configReducer = (state: configType = init, action: SetAction) => {
  switch (action.type) {
    case "SET":
      return { ...action.payload };
    default:
      return state;
  }
};

const store = createStore(configReducer);
export default store;
