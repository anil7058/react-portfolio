import React, { useEffect, useRef } from "react";
import "../Styles/Home.css";
// import Contact from "./Contact";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import home from "../Image/home-setup.jpg"
import Abouts from "./Abouts"
import { init } from "ityped";
import Services from "./Services";
import Categories from "./Categories";


const Home = () => {

  const textRef = useRef()
  
  useEffect(() =>{
    init(textRef.current, {
           backDelay: 1500,                                       
           showCursor: true,
           strings:[  
            'Akshay Gehlot',
            'a Web Developer'
           ]
     });
  }, []);

  return (
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_container mt-5">
              <h1>Hi</h1>
              <h2 className="hero_title mb-3">
                I'm <span ref={textRef}></span>
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non nisi nulla nam eveniet quos ullam suscipit sint ipsum debitis.</p>
              <div className="hero_btn d-flex align-item-center gap-4 mt-5">
                <button className="btn-1">
                  <Link to="/About">Here Me</Link>
                </button>
                <button className="btn-2">
                <Link to="/Contact">Contact</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero_img mt-5">
              <img src={home} alt="" className="w-100"/>
            </div>

          </Col>
          <Abouts />
          <Services />
          <Categories/>
        </Row>
      </Container>
  );
};

export default Home;
