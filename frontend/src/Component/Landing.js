import React from "react";

const landingStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage:
    "url(https://images.pexels.com/photos/926987/pexels-photo-926987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  height: "60vh",
  alignItems: "center",
  display: "flex",
  justifyContent: "center"
};

const Landing = () => {
  return (
    <div className="container" style={landingStyle}>
      <div className="animated fadeInDown">
        <h1 style={{ textAlign: "center" }}>Welcome to LLAG </h1>
        <h2 style={{ textAlign: "center" }}>
          {" "}
          This is education platform for everyone{" "}
        </h2>
      </div>
    </div>
  );
};
export default Landing;
