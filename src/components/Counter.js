import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
function DummyCounter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h4>{counter}</h4>
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Decrement
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default DummyCounter;
