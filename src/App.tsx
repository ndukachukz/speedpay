import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header, Hero, Categories } from "./components/index";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* CATEGORY */}
      <Categories />
    </div>
  );
}

export default App;
