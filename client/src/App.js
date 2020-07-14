import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Route path="/">
        <Header />
      </Route>
      <Route path="/">
        <Homepage />
      </Route>
      <Route path="/">
        <Footer />
      </Route>
    </>
  );
}

export default App;
