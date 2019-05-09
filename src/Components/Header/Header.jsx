import React, { Fragment } from "react";
import "./Header.scss";
import { Logo } from "../Common";
import { SearchContainer } from '../../Containers/Search';
import { TopBarContainer } from '../../Containers/TopBar'

export const Header = () => {
  const isSearchPage = window.location.pathname.split('/')[1] === 'search';
  return (
    <Fragment>
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo />
          </div>
          <div className="col-12">
            <SearchContainer />
          </div>
        </div>
      </div>
    </header>
    {isSearchPage && <TopBarContainer /> }
    </Fragment>
  );
};
