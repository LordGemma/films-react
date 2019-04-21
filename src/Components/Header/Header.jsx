import React from "react";
import "./Header.scss";

import { Logo } from "../Common";
import { Search } from './Search';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo />
          </div>
          <div className="col-12">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};
