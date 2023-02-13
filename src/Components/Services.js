import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../Styles/Services.css";

const servicesData = [
  {
    icon: "fa-solid fa-code-simple",
    title: "Web Developer",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    icon: "fa-solid fa-code",
    title: "Web Design",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    icon: "fa-solid fa-qrcode",
    title: "App Developer",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    icon: "fa-solid fa-code-simple",
    title: "Design",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
];

const Services = () => {
  return (
    <section id="services ">
      <Container>
        <Row>
          <Col lg="12" className="service_top mb-2 mt-3">
            <h4 className="mt-2">Service</h4>
          </Col>
          {/* <Col lg="4" md="6" sm="6"> */}
          {servicesData.map((item, index) => (
            <Col lg="4" md="6" sm="6">
              <Link to="categoriesData"></Link>
                <div className="single_service mt-2">
                  <span className="service_icon">
                    <i class={item.icon}></i>
                  </span>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              
            </Col>
          ))}
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
