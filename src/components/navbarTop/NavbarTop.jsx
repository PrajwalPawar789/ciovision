import React from "react";
import "./navbarTop.scss";
import {
  MdLocationOn,
  MdOutlinePersonOutline,
  MdOutlineLanguage,
} from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";
import { BiCalendar } from "react-icons/bi";
import { RxCaretDown } from "react-icons/rx";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { ImGooglePlus } from "react-icons/im";
import { MdRssFeed } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const NavbarTop = () => {
  return (
    <div className="navbarTop">
      <div className="navbarContainer">
        <div className="left">
          <div className="item">
            <MdLocationOn style={{ fontSize: "16px" }} />
            <span>New York</span>
          </div>
          <div className="item">
            <WiDayCloudy style={{ fontSize: "16px" }} />
            <span>21°C</span>
          </div>
          <div className="item">
            <BiCalendar style={{ fontSize: "16px" }} />
            <span>Today</span>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <MdOutlinePersonOutline style={{ fontsize: "16px" }} />
            <span>Login/Register</span>
          </div>
          <div className="item">
            <MdOutlineLanguage style={{ fontsize: "16px" }} />
            <span>English</span>
            <RxCaretDown style={{ fontSize: "16px" }} />
          </div>
          <div className="icons">
            <RiFacebookFill style={{ fontSize: "16px" }} />
            <RiTwitterFill style={{ fontSize: "16px" }} />
            <ImGooglePlus style={{ fontSize: "16px" }} />
            <MdRssFeed style={{ fontSize: "16px" }} />
            <FaYoutube style={{ fontSize: "16px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
