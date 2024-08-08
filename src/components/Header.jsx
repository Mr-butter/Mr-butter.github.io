import React from "react";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Portfolio
        </a>
        <button
          className="btn btn-info"
          onClick={() => {
            window.open("/Resume/Resume.pdf", "_blank");
          }}>
          🙋🏻‍♂️ Hire Me!
        </button>
      </div>
    </nav>
  );
};

export default Header;
