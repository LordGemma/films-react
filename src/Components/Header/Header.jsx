import React from "react";
import "./Header.scss";

import { Logo } from "../Common";
import { Search } from './Search';

export const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo />
          </div>
          <div className="col-12">
            <Search {...props} />
          </div>
        </div>
      </div>
    </header>
  );
};
