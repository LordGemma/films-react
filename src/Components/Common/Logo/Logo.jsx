import React from "react";
import "./Logo.scss";

export const Logo = ({ title }) => {
  return (
    <div className="logo">
      <p>{title || "netflixroulette"}</p>
    </div>
  );
};
