import Button from "@material-ui/core/Button/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../stores/counter/actions";

function AddButton() {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(Actions.Add())}>add</Button>;
}
export default AddButton;
