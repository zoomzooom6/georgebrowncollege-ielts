import React from 'react';
import './App.css';

import Home from '../src/components/Home';
import About from '../src/components/AboutUs';
import Nav from "../src/components/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Home></Home>
        <About></About>
      </main>
    </div>
  );
}

export default App;
