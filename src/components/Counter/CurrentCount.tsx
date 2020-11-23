import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/reducers";
import { makeStyles } from "@material-ui/core";

function CurrentCount() {
  const num = useSelector((state: RootState) => state.counter.num);
  return <div> {num} </div>;
}

export default CurrentCount;
