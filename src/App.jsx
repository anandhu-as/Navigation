import React from "react";
import Accordion from "./Components/Accordion";
const App = () => {
  const items = [
    {
      id:1,
      label: "can i use react on project",
      content: "You can use react on project ",
    },
    {
      id:2,
      label: "can i use javascript on project",
      content: "You can use javascript on project",
    },
    {
      id:3,
      label: "can i use next.js on project",
      content: "You can use next.js on project",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
export default App;
