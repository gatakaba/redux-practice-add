import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddButton from "./components/AddButton";
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <AddButton />
    </div>
  );
}

export default App;
