import React from "react";
import HeaderStyle from "./Header.module.css";
import InvCalLogo from "./HeaderIMGS/invcalLOGO.jpg";
const Header = () => {
  return (
    <div className={HeaderStyle.Header}>
      <img src={InvCalLogo} alt="LOGO" />
      <h1>Investment Calculator</h1>
    </div>
  );
};

export default Header;
