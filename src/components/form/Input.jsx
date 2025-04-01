import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  disabled = false,
  minLength
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      minLength={minLength}
      className={`w-full p-3 ring ring-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${className} ${
        disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
      }`}
    />
  );
};

export default Input;
