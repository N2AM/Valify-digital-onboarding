import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="grid">
        <div className="col-2"></div>
        <div className="col-8">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
