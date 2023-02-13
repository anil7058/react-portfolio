import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../Styles/Categories.css";

const categoriesData = [
  {
    title: "Responsive Web Design",
    desc: "Our web developers and designer are professional at creating full-screen websites with a high level of interactivity and aesthetic appeal that operate smoothly on smartphones as well as on desktops or any other device.",
  },
  {
    title: "Custom Web Development",
    desc: "we're always looking to identify genuine problems amongst your cosumers and provide an effective solution. By adopting a date-led approach, we start every new campaign, project and client relationship by gathering.",
  },
  {
    title: "CMS Developer",
    desc: "In order to give you increased functionality, usability, and a seamless website maintenance experience, we design a customised CMS system and connect it with the frontend of your website.",
  },
  {
    title: "eCommerce Development",
    desc: "We have the competence to suit the needs of the clients, whether they demand a next-generation online shop built from the ground up on an open-source ecommerce platfrom or an open-source website built of a specific business purpose.",
  },
  {
    title: "Enterprice Web Developer",
    desc: "WE create expansive digital solution for businesses in the B2B and B2C secters, website that are interactive, dynamic, and high-perfomance. Enterprise website are a curcial marketing tool for goods, services, and even concepts.",
  },
  {
    title: "Support and Maintenance",
    desc: "For the support of your website and app, we provide quick, dependable, and lnowledgeble managment and one-month maintenance services. We'll take care of the issues, improve the functionality, and guarantee that everything runs well.",
  },
];

const Categories = () => {
  return (
      <section id="categories">
        <Container>
        <Row>
          <Col lg="12" className="categories_top mb-2 mt-3">
            <h4 className="mt-2">Categories</h4>
          </Col>
            {categoriesData.map((item, index) => (
              <Col lg="4" md="6" sm="6" className="mb-5">
              <div className="single_categories mt-2">
                <h2 className="title">{item.title}</h2>
                <p className="desc">
                  {item.desc}
                </p>
              </div>
              </Col>
            ))}
        </Row>
      </Container>
      </section>
  );
};

export default Categories;