import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/reducers";

function CurrentCount() {
  const num = useSelector((state: RootState) => state.counter.num);
  return <div> {num} </div>;
}

export default CurrentCount;
