import React from "react";
import propTypes from "prop-types";
const Button = ({ children, primary, danger, outline, rounded, success }) => {
  return <button>{children}</button>;
};
Button.propTypes = {
  checkValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) return new Error("Error");
  },
};

export default Button;
