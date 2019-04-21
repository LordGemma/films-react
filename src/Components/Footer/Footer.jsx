import React from "react";
import { Logo } from "../Common";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};
