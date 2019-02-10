import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  componentDidMount() {
    const navHeight = this.refs.nav.offsetTop;
    window.addEventListener("scroll", () => {
      if (window.scrollY > navHeight) {
        this.refs.nav.classList.add("nav--sticky");
      } else {
        this.refs.nav.classList.remove("nav--sticky");
      }
    });
  }

  render() {
    return (
      <div className="container">
        <nav ref="nav" className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <NavLink exact to="/best" activeClassName="active">
                Best Sellers
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink to="/archives" activeClassName="active">
                Archive
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink to="/popular" activeClassName="active">
                Popular
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
