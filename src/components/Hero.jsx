import React from "react";

const Hero = () => {
  return (
    <div
      className="container-fluid text-white bg-dark text-white d-flex justify-content-center align-items-center flex-column"
      style={{ height: "50vh" }}
    >
      <h1 style={{ fontSize: "50 px" }}>
        <span style={{ color: "orangered" }}>News</span> Today
      </h1>
      <h6>Your Daily Dose of Breaking News!</h6>
    </div>
  );
};

export default Hero;
