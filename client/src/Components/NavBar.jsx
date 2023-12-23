import { useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex py-6 justify-between text-gray-400 items-center navbar px-5">
      <div className="flex">
        <Link to="/">
          <div className="flex gap-2 mx-3 w-48">
            <h2 className="font-bold text-xl text-black">ReiXport</h2>
          </div>
        </Link>
        <ul className="font-sans font-semibold leading-[22.4px] list-none lg:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`mr-10  cursor-pointer text-[16px] hover:text-black ${
                active === nav.title ? "text-black" : "text-dimWhite"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.link}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-sm:flex max-sm:w-full gap-2 max-sm:justify-center max-sm:items-center max-sm:flex-col">
        <Link to="/addmed">
          <button className="px-5 py-[2px] md:py-3 mx-2 rounded-[10px]  hover:text-black text-blue-600  border-2  bg-transparent">
            Start/Create
          </button>
        </Link>
        <Link to="/contact">
          <button className="px-5 py-[2px] md:py-3 mx-2 rounded-[10px]  hover:text-black text-white bg-blue-700  border-2 ">
            Lets talk
          </button>
        </Link>
        <Link to="/read-more">
          <button className="px-5 py-[2px] md:py-3 mx-2 rounded-[10px]  hover:text-black text-blue-600   border-2  bg-transparent">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
