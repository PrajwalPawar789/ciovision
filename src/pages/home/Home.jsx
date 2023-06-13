import React from 'react'
import "./home.scss";
import AdvertTop from "../../components/advertTop/AdvertTop.jsx";
import NavbarTop from "../../components/navbarTop/NavbarTop.jsx";
import NavbarBottom from "../../components/navbarBottom/NavbarBottom.jsx";

const Home = () => {
  return (
    <div className="homeWrapper">
      <NavbarTop/>
      <AdvertTop />
      <NavbarBottom/>
    </div>
  )
}

export default Home;