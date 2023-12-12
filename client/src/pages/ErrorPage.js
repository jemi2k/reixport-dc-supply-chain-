import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center">
      <img src={require("../assets/404.jpg")} alt="404" />
      <h1 className="font-[400] text my-7 text-[55px]">
         Sorry this page Integration is not done yet, 
         Come Back Soon! or <Link to="/">
          <div className="flex gap-2 mx-3 w-48">
            <h2 className="font-bold text-[55px] text-blue">Home</h2>
          </div>
        </Link>
        </h1>
    </div>
  );
};

export default ErrorPage;
