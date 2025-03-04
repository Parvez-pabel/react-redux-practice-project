import React from "react";
// import { Provider } from "react-redux";
// // Adjust path if needed
// import store from "./assets/redux/store/Store";
// import SellTarget from "./assets/components/counter/Counter";
import TodoPage from "./assets/pages/TodoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    // <Provider store={store}>
    //   <SellTarget />
    // </Provider>
    <div>
      <TodoPage />
    </div>
  );
}

export default App;
