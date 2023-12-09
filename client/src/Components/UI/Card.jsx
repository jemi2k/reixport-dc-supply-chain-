import React from "react";

const Card = (props) => {
  return (
    <div className="w-[600px] hover:scale-[] transition-all ease-in-out shadow-x py-4 px-2 rounded-[10px] bg-[#f4f8fd]">
      <h1 className="font-bold text-[19px] py-2 ">{props.title}</h1>
      <p className="text-[17px]">{props.description}</p>
    </div>
  );
};

export default Card;
