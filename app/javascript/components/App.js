import React from "react";
import Greeting from "./greeting/Greeting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import globalStore from "./redux/configureStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={globalStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={< Greeting /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;