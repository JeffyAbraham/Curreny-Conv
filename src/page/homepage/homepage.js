import React from "react";
import "./homepage.css";
import "../../component/form-component-component/form.component";
import ConversionComponent from "../../component/conversion-component/conversion.component";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <div style={{ marginTop: "-30px" }}>
        <ConversionComponent />
      </div>
    </div>
  );
};
export default HomePage;
