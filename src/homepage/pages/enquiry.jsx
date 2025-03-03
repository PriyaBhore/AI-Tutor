import React from "react";
import '../css/enquiry.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";




function Enquiry(){
    return(
        <>
<div className="container contact-section d-flex justify-content-center align-items-center">
  <div className="row w-100 d-flex justify-content-center align-items-center">
  <h2 className="text-center mb-4">Contact Us</h2>
    {/* Left Side: Contact Info */}
    <div className="col-md-5 contact-info p-4 bg-light shadow rounded text-center" style={{ maxWidth: "350px" }}>
      <h4 className="mb-3">Get in Touch</h4>
      <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-primary" /> Mumbai, India</p>
      <p><FontAwesomeIcon icon={faPhone} className="me-2 text-success" /> +91 98765 43210</p>
      <p><FontAwesomeIcon icon={faEnvelope} className="me-2 text-danger" /> support@aitutor.com</p>
    </div>

    {/* Right Side: Contact Form */}
    <div className="col-md-7 p-4">
      <div className="contact-form">
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your message here..."></textarea>
        </div>

        <button className="btn btn-primary w-100">Send Message</button>
      </div>
    </div>
  </div>
</div>

        </>
    );
}
export default Enquiry;