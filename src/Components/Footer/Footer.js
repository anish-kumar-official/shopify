import React from "react";
import "./Footer.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return <div className="footerWrapper">&copy; {year} all right reserved</div>;
};

export default Footer;
