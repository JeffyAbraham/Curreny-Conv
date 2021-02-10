import React from "react";
import Tabpanel from "../horiziontal-header.component/horizontal-header";
import { Hamburger } from "../hamburger-container-component/hamburger.component";
import "./header.styles.css";
const Headers = () => {
  return (
    <div>
      <Hamburger />
      <header className='hide-header-style'>
        <Tabpanel />
      </header>
    </div>
  );
};

export default Headers;
