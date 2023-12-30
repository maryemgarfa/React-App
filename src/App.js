import React from "react";
import { CTA, Navbar, Brand } from "./components";
import "./App.css";

import {
  Footer,
  Header,
  WhatGpt,
  Blog,
  Possibility,
  Features,
} from "./containers";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
