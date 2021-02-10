import React from "react";
import { Link } from "react-router-dom";
import "./hamburgercomponent.styles.css";
function sideMenu() {
  document.getElementsByClassName("MainHamburgerMenu")[0].style.width = "70%";
}
function closesideMenu() {
  document.getElementsByClassName("MainHamburgerMenu")[0].style.width = "0%";
}
export const Hamburger = () => {
  return (
    <div>
      <div className="MainContainer">
        <div className="HamburgerMenu">
          <div className="SubHamburger">
            <div className="Hamburger" onClick={sideMenu}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <div>
              <div className="MainHamburgerMenu">
                <div className="fexi">
                
                  <div
                    style={{
                      fontSize: "24px",
                      color: "white",
                      fontWeight: "lighter",
                      marginRight: "100px",
                     
                      marginLeft:'300px'
                    }}
                    onClick={closesideMenu}
                  >
                    X
                  </div>
                </div>
                <div className="ham">
                  <Link
                    style={{ color: "white" }}
                    to="/"
                    onClick={closesideMenu}
                  >
                    CURRENCY EXCHANGE
                  </Link>
                </div>
                <div className="ham">
                  <Link
                    to="/EXCHANGE"
                    style={{ color: "white" }}
                    onClick={closesideMenu}
                  >
                   EXCHANGE
                  </Link>
                </div>
               
                
              </div>
            </div>
            <div className="Title2" style={{color:'white'}}>......</div>
          </div>
          <div className="Cart2">
        
          </div>
        </div>
      </div>

      
    </div>
  );
};
