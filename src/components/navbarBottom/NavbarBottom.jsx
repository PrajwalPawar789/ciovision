import {React, useState} from 'react';
import "./navbarBottom.scss";
import { MdKeyboardArrowDown, MdNavigateNext } from "react-icons/md";
import { FaSearch} from "react-icons/fa";



const NavbarBottom = () => {
  const [dropdownone, setDropdownone] = useState(false);
  const handledropdownone = (e) => {
      setDropdownone(!dropdownone);
  };
  return (
    <div className="navbarBottom">
        <div className="navbarBottomWrapper">
            <div className="item" onClick = {handledropdownone}>
                <span>Home</span>
                <MdKeyboardArrowDown style={{ fontSize: "20px"}}/>
                { dropdownone && (

                  <div className="dropdownMenu1" >

                    <span>
                      <a>Home Default</a>
                    </span>
                    
                    <span className="active">
                      <a>Home Boxed</a>
                    </span>
                    
                    <span>
                      <a>Home RTL</a>
                    </span>
                    
                    <span>
                      <a>Home RTL Boxed</a>
                    </span>

                    <span>
                      <a>Home Version
                        <MdNavigateNext
                          style={{
                            fontSize: "20px",
                          }}
                        />
                      </a>
                    </span>

                    <span>
                      <a>Menu Version
                        <MdNavigateNext
                          style={{
                            fontSize: "20px",
                          }}
                        />
                      </a>
                    </span>

                  </div>

                )}
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