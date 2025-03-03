import React from "react";
import { Provider } from "react-redux";
 // Adjust path if needed
import store from "./assets/redux/store/Store";
import SellTarget from './assets/components/counter/Counter';

function App() {
  return (
    <Provider store={store}>
      <SellTarget />
    </Provider>
  );
}

export default App;
