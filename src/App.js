import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

import Header from "./components/Header.js";
import User from "./pages/User.js";
import Cart from "./pages/Cart.js";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/user" exact Component={User} />
          <Route path="/cart" exact Component={Cart} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
