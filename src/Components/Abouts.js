import React, { useState } from "react";
import "../Styles/Abouts.css"
import { Col, Container, Row } from "reactstrap";
import { FaFacebookF } from "react-icons/fa";
// import { RiInstagramLine } from "react-icons/ri";
import home from "../Image/home-setup.jpg";
import Education from "./Education";
import Skills from "./Skills";
import Award from "./Award";

const Abouts = () => {

  const [aboutFilter, setAboutFilter] = useState('ABOUT')

  return (
    <Container>
      <Row>
        <Col lg="12">
          <h2 className="heading mb-4">Abouts me</h2>
        </Col>      
        <Col lg="4" md="3" className="mb-2">   
          <div className="about_btns d-flex flex-column align-item-center">       
            <button className={`about_btn ${aboutFilter === 'ABOUT' ? 'about_btn-active' : ''}`} 
            onClick={()=>setAboutFilter('ABOUT')}>About Me</button>
            <button className={`about_btn ${aboutFilter === 'EDUCATION' ? 'about_btn-active' : ''}`}  
            onClick={()=>setAboutFilter('EDUCATION')}>Education</button>
            <button className={`about_btn ${aboutFilter === 'SKILLS' ? 'about_btn-active' : ''}`}  
            onClick={()=>setAboutFilter('SKILLS')}>Skills</button>
            <button className={`about_btn ${aboutFilter === 'AWARD' ? 'about_btn-active' : ''}`}  
            onClick={()=>setAboutFilter('AWARD')}>Award</button>
          </div>
        </Col>
        <Col lg="8" md="9" className="col">
          
          {
            aboutFilter == 'ABOUT'&& <div className="about_content_wrapper d-flex gap-3">
            <div className="about_img">
                <img src={home} alt="" className="w-100 about-img" />
                </div>
            <div className="about_content w-75">
              <h2 className="mb-4">I'm Akshay Gehlot</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem distinctio harum, saepe soluta dolorem quod.
              </p>
              <div className="social_link">
                <h6 className="mb-4">Contact with me:</h6>
                    <span className="mr-10">
                    <a
                      href="https://www.facebook.com/akshay.gehlot.984"
                      title="facebook"
                      className="fa-icon"
                    >
                      <i>
                        <FaFacebookF />
                      </i>
                    </a>
                    <a
                      href="https://www.instagram.com/akshay.k.gehlot/"
                      title="instagram"
                      className="fa-icon"
                    >
                      <i className="fa fa-instagram">
                      <i class="bi bi-instagram"></i>
                      </i>
                    </a>
                    </span>
              </div>
            </div>
          </div>
          }

          {aboutFilter === 'EDUCATION' && <Education />}
          {aboutFilter === 'SKILLS' && <Skills />}
          {aboutFilter === 'AWARD' && <Award />}
        </Col>
      </Row>
    </Container>
  );
};

export default Abouts;
