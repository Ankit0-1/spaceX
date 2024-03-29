import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}  >
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
