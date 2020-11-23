import React from "react";
import { connect, useSelector } from "react-redux";

function Counter() {
  const num = useSelector((state) => state);
  // @ts-ignore
  return <div> {num.add.count} </div>;
}

export default Counter;
