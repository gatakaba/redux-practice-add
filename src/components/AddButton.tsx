import Button from "@material-ui/core/Button/Button";
import React from "react";
import { connect, useDispatch } from "react-redux";

function AddButton() {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch({ type: "ADD" })}>add</Button>;
}
export default AddButton;
