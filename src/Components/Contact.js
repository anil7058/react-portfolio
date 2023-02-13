import React from "react";
import "../Styles/Contact.css";
import { FaFacebookF, FaPhoneAlt, FaAt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="container">
      <div class="section-container-spacer text-center">
              <h1 class="h1 mt-4 mb-5">Contact me</h1>
            </div>
      <div class="row">
      <div class="col-lg-5 col-md-6 form">
        <form action="https://formspree.io/f/mnqyponl"
        method="POST" className="form mb-5">
                <div className="form__group">
                  <input
                    type="Name"
                    name="name"
                    placeholder="Name"
                    class="form-control"
                    autoComplete="off"
                    id="name"
                    required
                  />
                </div>
                <div className="form__group mt-2 mb-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="form-control"
                    id="email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form__group mb-2">
                  <textarea
                    placeholder="Message"
                    name="message"
                    class="form-control"
                    id="message"
                    autoComplete="off"
                    rows="5"
                    required
                  />
                </div>

                <div class="col-lg-5 col-md-6 form">
          <button type="submit" class="btn btn-default btn-lg">
            Send
          </button>
        </div>
        </form>
       </div>

        <div class="col-lg-5 col-md-4 address">
          <ul className="list-unstyled">
            <li>
              <span className="fa-icon">
                <i className="fa fa-phone phone" aria-hidden="true">
                <i class="bi bi-telephone"></i>
                </i>
              </span>
              <a href="tel:917058451564" className="number">
                + 91 70584 51564
              </a>
            </li>
            <li>
              <span className="fa-icon email">
                <i className="fa fa-at" aria-hidden="true">
                <i class="bi bi-at"></i>
                </i>
              </span>
              <a href="mailto:akshaygehlot003@gmail.com" className="email">
                Akshaygehlot003@gmail.com
              </a>
            </li>
          </ul>
          <h3>Follow me on social networks</h3>
          <a
            href="https://www.facebook.com/akshay.gehlot.984"
            title=""
            className="fa-icon">
            <i>
              <FaFacebookF />
            </i>
          </a>
          <a
            href="https://www.instagram.com/akshay.k.gehlot/"
            title=""
            className="fa-icon"
          >
            <i className="fa fa-instagram">
                      <i class="bi bi-instagram"></i></i>
          </a>
          <a
            href="https://www.linkedin.com/in/akshay-gehlot-a117a3234/"
            title=""
            className="fa-icon"
          >
            
            <i className="fa fa-linkedin">
                      <i class="bi bi-linkedin"></i></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
