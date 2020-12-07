import React, { Component } from "react";
import "./header.css";
import logo from "../../assets/yfdicon.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-content">
          <div className="left-header">
            <img src={logo} className="app-logo" alt="logo" />
            <nav>
              <ul>
                <li>
                  <a href="#about">Buy on Uniswap</a>
                </li>
                <li>
                  <a href="#portofolio">Staking Pool</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#contact">Community</a>
                </li>
                <li>
                  <a href="#contact">Docs</a>
                </li>
                <li>
                  <a href="#contact">Audit Report</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="right-header">
            <a className="btn btn-add" href="true">
              Add Liquidity
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
