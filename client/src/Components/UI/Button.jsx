import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.link}>
      <button className="px-5 py-3 rounded-[10px] text-white hover:bg-blue-900 hover:border- border-2  bg-blue-600">
        {props.children}
      </button>
    </Link>
  );
};

export default Button;
