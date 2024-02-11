import React from "react";
import { BsSliders2 } from "react-icons/bs";
import packers from "./pac.png"

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navlogo">
          <span>PBC PACKERS AND MOVERS</span>
        </div>
        <div className="slidebar">
          <div>
            <BsSliders2 />
          </div>
        </div>
      </div>
      <div className="image">
        <img className="pimg" src={packers}></img>
      </div>
    </>
  );
};

export default Navbar;
