import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../Image/logo.jpeg";
import { FaFacebookF } from "react-icons/fa";

import "../Styles/Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Akshay Gehlot</h5>
              <p>
                I am a web developer and app developer
              </p>
            </div>
          </Col>

          <Col lg="4" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +91 7058451564</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: akshaygehlot003@gmail.com</span>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Pune Maharashtra</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          
          <Col lg="4" md="4" sm="6">
            <div className="social__links d-flex align-items-center gap-4 ">
              <p className="m-0">Follow: </p>
              <span>
              <a href="https://www.facebook.com/akshay.gehlot.984"
                title="facebook"
                className="fa-icon">
                 <i>
                <FaFacebookF />
                </i>
                 </a>
                {" "}
                <a href="https://www.instagram.com/akshay.k.gehlot/"
                className="fa-icon">
                <i className="fa fa-instagram"></i>
                </a>{" "}
              </span>
              <span>{" "}
                <a href="https://github.com/anil7058"
                className="fa-icon">
                <i className="fa fa-github"></i>
                </a>{" "}
              </span>

              {/* <span>
                <Link to="">
                <i class="bi bi-github"></i>
                </Link>
              </span> */}
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="12" md="12">
            <p className="copyright__text">
              Copyright {new Date().getFullYear()}., website made by<a href="https://www.instagram.com/akshay.k.gehlot/" title="akshay"></a> Akshay Gehlot. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
