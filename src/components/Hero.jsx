import React from "react";
// import background from "./cover_pic.jpg";

const Hero = () => {
  return (
    <div
      className="container-fluid text-white bg-dark text-white d-flex justify-content-center align-items-center flex-column"
      style={{
        height: "60vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/cover_pic.png"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 style={{ fontSize: "55px" }}>
        <span style={{ color: "orangered" }}>News</span> Today
      </h1>
      <h6>Your Daily Dose of Breaking News!</h6>
    </div>
  );
};

export default Hero;
