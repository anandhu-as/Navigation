import React from "react";
import className from "classnames";
const Button = ({
  children,
  primary,
  danger,
  outline,
  secondary,
  warning,
  rounded,
  success,
  ...rest
}) => {
  const classes = className("px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-400 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-500": outline && primary,
    "text-green-500": outline && primary,
    "text-yellow-500": outline && primary,
    "text-red-500": outline && primary,
  });
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
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