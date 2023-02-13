import React from "react";
import "../Styles/About.css";
import logo from "../Image/logo-2.jpeg";

const About = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-6 about">
          <h2 className="mb-5">
            My <strong> Profile</strong>
          </h2>
          <p>
            <b>
              <span>Name</span>
            </b>{" "}
            Akshay Gehlot
          </p>
          <p>
            <b>
              <span>Birthday</span>
            </b>{" "}
            April 24, 2001
          </p>
          <p>
            <b>
              <span>Address</span>
            </b>{" "}
            Pune
          </p>
          <p>
            <b>
              <span>Phone</span>
            </b>{" "} 
            +91 7058451564
          </p>
          <div>
            <p>I am B.COM student</p>
            {/* <p>
              I have experience in front-end, web designing, web
              developer,back-end developer and{" "}
            </p> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-6 image ">
          <img src={logo} class="img-responsive" alt="Akshay" />
        </div>
      </div>
    </div>
  );
};

export default About;
