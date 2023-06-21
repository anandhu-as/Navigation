import React from "react";
import Button from "./Button";
const App = () => {
  return (
    <div>
      <div>
        <Button success rounded outline>
          helloo
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>Click here</Button>
      </div>
      <div>
        <Button primary> submit</Button>
      </div>
    </div>
  );
};

export default App;
