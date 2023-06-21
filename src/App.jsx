import React from "react";
import Button from "./Components/Button";
const App = () => {
  
  return (
    <div>
      <div>
        <Button onClick={() => console.log("clicked")} secondary>
          click me
        </Button>
      </div>
      <div>
        <Button primary>Buy now</Button>
      </div>
      <div>
        <Button warning>Click here</Button>
      </div>
      <div>
        <Button primary outline>
          submit
        </Button>
      </div>
    </div>
  );
};
export default App;
