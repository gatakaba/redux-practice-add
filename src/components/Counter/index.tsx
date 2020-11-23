import React from "react";
import CurrentCount from "./CurrentCount";
import AddControll from "./AddControll";
import { makeStyles } from "@material-ui/core";
import SubtractControll from "./SubtractControll";

const useStyles = makeStyles({
  counter: {},
});

function Counter() {
  const classes = useStyles();
  return (
    <div className={classes.counter}>
      <CurrentCount />
      <AddControll />
      <SubtractControll />
    </div>
  );
}

export default Counter;
