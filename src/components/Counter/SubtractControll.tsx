import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../stores/counter/actions";

function SubtractControll() {
  const dispatch = useDispatch();
  const [decrementalValue, setDecrementalValue] = useState(1);

  return (
    <div>
      <TextField
        onChange={(e) => setDecrementalValue(Number.parseInt(e.target.value))}
        label={"Decremental Value"}
        error={isNaN(decrementalValue)}
        defaultValue={decrementalValue}
      ></TextField>

      <Button
        variant={"outlined"}
        disabled={isNaN(decrementalValue)}
        onClick={() => dispatch(Actions.Subtract(decrementalValue))}
      >
        add
      </Button>
    </div>
  );
}
export default SubtractControll;
