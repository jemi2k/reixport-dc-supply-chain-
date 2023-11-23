import React from "react";

const Button = (props) => {
  return (
    <button className="px-5 py-3 rounded-[10px] text-white hover:bg-blue-900 hover:border-black border-2  bg-blue-600">
      {props.children}
    </button>
  );
};

export default Button;
