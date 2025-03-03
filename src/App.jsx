import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logoimg from "./homepage/images/ailogo.jpg";
import bgone from "./homepage/images/bgone.webp";
import bgtwo from "./homepage/images/bgtwo.jpg";
import bgthree from "./homepage/images/bgthree.jpg";
import cardone from "./homepage/images/cardone.webp";
import cardtwo from "./homepage/images/cardtwo.png";
import cardthree from "./homepage/images/cardthree.jpg";
import cardfour from "./homepage/images/cardfour.png";

import "./homepage/css/heading.css";
import "./homepage/css/marquee.css";
import "./homepage/css/carousel.css";
import "./homepage/css/card.css";
import { FaStar } from "react-icons/fa";
import Routing from "./homepage/pages/routing";
import Reviews from "./homepage/pages/reviews";
import Faqs from './homepage/pages/faq';
import Enquiry from './homepage/pages/enquiry.jsx';

function App() {
  return (
    <>
      <div className="container-fluid full-screen">
        <div className="row align-items-center text-center full-width">
          {/* Logo */}
          <div className="col-md-2">
            <img src={logoimg} alt="Logo" className="img-fluid logo-img" />
          </div>

          {/* Heading & Figure */}
          <div className="col-md-8">
            <h1 className="main-heading">
              WELCOME TO AI VIRTUAL TUTOR WEBSITE
            </h1>
            <figure className="blockquote-wrapper">
              <blockquote className="blockquote">
                Arise, Awake and Educate
              </blockquote>
              <figcaption>"~ Savitribai Phule"</figcaption>
            </figure>
          </div>

          {/* Mode, Translator & AI Bot Icon */}
          <div className="col-md-2 text-end mode-section">
            <p>Mode</p>
            <p>Language Translator</p>
            <p>AI Bot Icon</p>
          </div>
        </div>
      </div>

      <div className="marquee-container">
        <marquee className="marquee-content">
          <FaStar className="star-icon" />
          Welcome to AI Virtual Tutor - Learn Smarter, Learn Faster! &nbsp;
          &nbsp;
          <FaStar className="star-icon" />
          View Various Features- &nbsp; &nbsp; <FaStar className="star-icon" />{" "}
          AI Powered Tutoring &nbsp; &nbsp; <FaStar className="star-icon" />{" "}
          Quiz Generator &nbsp; &nbsp; <FaStar className="star-icon" />{" "}
          Personalized Study Planner &nbsp; &nbsp;{" "}
          <FaStar className="star-icon" /> Progress Tracking
        </marquee>
      </div>

      <div>
        <Routing />
      </div>

      <div className="carousel-container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={bgthree}
                className="d-block w-100 carousel-img"
                alt="Image One"
              />
              <div className="carousel-caption d-md-block">
                <h5>Start Learning Today</h5>
                <button>Enroll Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={bgtwo}
                className="d-block w-100 carousel-img"
                alt="Image Two"
              />
              <div className="carousel-caption d-md-block">
                <h5>Enroll Now In Various Features</h5>
                <button>View Features</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={bgone}
                className="d-block w-100 carousel-img"
                alt="Image Three"
              />
              <div className="carousel-caption d-md-block">
                <h5>Learn More About Us</h5>
                <a href="#">Contact Now</a>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div>
      <div className="container">
  <div className="row">
  <h1 className="mt-2">FEATURES :</h1>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <img className="card-img-top" src={cardone} alt="Card image one" />
        <div className="card-body">
          <h5 className="card-title">AI Powered Tutorial</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <img className="card-img-top" src={cardtwo} alt="Card image two" />
        <div className="card-body">
          <h5 className="card-title">Quiz Generator</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <img className="card-img-top" src={cardthree} alt="Card image three" />
        <div className="card-body">
          <h5 className="card-title">Personalized Study Planner</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <img className="card-img-top" src={cardfour} alt="Card image four" />
        <div className="card-body">
          <h5 className="card-title">Progress Tracker</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>

    <div>
        <Reviews/>
    </div>
    <div>
      <Faqs/>
    </div>

    <div>

    </div>
        <Enquiry/>
    </div>

    </>
  );
}

export default App;
