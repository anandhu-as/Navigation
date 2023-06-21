import React from "react";
import Button from "./Button";
const App = () => {
  return (
    <div>
      <div>
        <Button success rounded >
          helloo
        </Button>
      </div>
      <div>
        <Button secondary >
          Buy now   
        </Button>
      </div>
      <div>
        <Button warning>Click here</Button>
      </div>
      <div>
        <Button primary outline> submit</Button>
      </div>
    </div>
  );
};

export default App;
