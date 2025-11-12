
import React from "react";
import footerStyle from "../styles/footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.footerContent}>
        <div className={footerStyle.logo}>
          <NavLink to="/home">FreshKart</NavLink>
          <div className={footerStyle.copy}>
            © {new Date().getFullYear()} FreshKart. All rights reserved .
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
