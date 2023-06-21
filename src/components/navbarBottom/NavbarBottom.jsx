import {React, useState} from 'react'
import "./navbarBottom.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch} from "react-icons/fa";

const NavbarBottom = () => {
  const [drowpdownone, setDropdownone] = useState(false);
  const handledropdownone = (e) => {
      setDropdownone(!drowpdownone);
  };
  return (
    <div className="navbarBottom">
        <div className="navbarBottomWrapper">
            <div className="item" onClick={handledropdownone}>
                <span>Home</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
            </div>
            <div className="item">
                <span>Worlds News</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
            </div>
            <div className="item">
                <span>National</span>
            </div>
            <div className="item">
                <span>Financial</span>
            </div>
            <div className="item">
                <span>Enterntainment</span>
            </div>
            <div className="item">
                <span>LifeStyle</span>
            </div>
            <div className="item">
                <span>Technology</span>
            </div>
            <div className="item">
                <span>Travel</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
            </div>
            <div className="item">
                <span>Catagory</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
            </div>
            <div className="item">
                <span>Pages</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
            </div>
            <div className="item">
              <FaSearch style= {{fontSize: "15px"}}/>
            </div>
        </div>
    </div>

  )
}

export default NavbarBottom