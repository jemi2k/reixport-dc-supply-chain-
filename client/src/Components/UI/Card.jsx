import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="w-[600px] hover:scale-[] transition-all ease-in-out shadow-x py-4 px-2 rounded-[10px] bg-[#f4f8fd]">
      <h1 className="font-bold text-[19px] py-2 ">{props.title}</h1>
      <p className="text-[17px]">{props.description}</p>

      <div className="mt-4 ">
        <Link to={props.link}>
          <button className="px-5 py-3 rounded-[10px] text-white hover:bg-blue-900 hover:border- border-2  bg-blue-600">
            {props.button}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
