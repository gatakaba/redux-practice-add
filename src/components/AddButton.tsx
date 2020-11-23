import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../stores/counter/actions";

function AddButton() {
  const dispatch = useDispatch();
  const [incrementalValue, setIncrementalValue] = useState(1);

  return (
    <div>
      <TextField
        onChange={(e) => setIncrementalValue(Number.parseInt(e.target.value))}
        error={isNaN(incrementalValue)}
        defaultValue={incrementalValue}
      ></TextField>

      <Button
        variant={"outlined"}
        disabled={isNaN(incrementalValue)}
        onClick={() => dispatch(Actions.Add(incrementalValue))}
      >
        add
      </Button>
    </div>
  );
}
export default AddButton;
