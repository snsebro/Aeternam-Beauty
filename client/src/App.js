import React from 'react';
import {Route} from "react-router-dom"

import Header from "./components/Header/Header"

import './App.css';

function App() {
  return (
      <Route path="/">
        <Header />
      </Route>
  
  );
}

export default App;
