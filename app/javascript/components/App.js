import React from "react";
import Greeting from "./greeting/Greeting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={< Greeting /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;