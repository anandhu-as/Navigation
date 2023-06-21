import React from "react";

const Accordion = ({ items }) => {
  const data = items.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });
  return <div>{data}</div>;
};

export default Accordion;
