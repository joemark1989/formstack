import React from "react";
import Navbar from "./Navbar";

export default props => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
    </>
  );
};
