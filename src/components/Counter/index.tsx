import React from "react";
import CurrentCount from "./CurrentCount";
import AddControll from "./AddButton";

function Counter() {
  return (
    <div className="App">
      <CurrentCount />
      <AddControll />
    </div>
  );
}

export default Counter;
