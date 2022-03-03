import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";

import { MainPage } from "./pages/MainPage";
import { ActionChoice } from "./pages/ActionChoice";
import { About } from "./pages/About";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/choice" element={<ActionChoice />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
