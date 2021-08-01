import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main">
      <div className="navbar">
        <img src="/images/ironhack-logo.svg" alt="IronHack Logo"></img>
        <img src="/images/menu-top.svg" alt="Menu Image"></img>
      </div>

      <div className="title">
        <h1>Say Hello To ReactJS</h1>
      </div>

      <section className="description">
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
      </section>

      <button>Awesome!</button>
    </div>
  );
};

export default Header;
