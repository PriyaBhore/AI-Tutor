import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Faq.css"; // Import CSS file

const Faqs = () => {
  return (
    <div className="container faq-section">
      <h2 className="text-center">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">

        {/* FAQ Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              What is AI Virtual Tutor?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              AI Virtual Tutor is an intelligent learning platform that provides personalized learning experiences, quizzes, and progress tracking.
            </div>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
            >
              Is AI Virtual Tutor free to use?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yes! AI Virtual Tutor offers a free version with premium features available under paid plans.
            </div>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
            >
              How does the quiz generator work?
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Our AI-powered quiz generator automatically creates quizzes based on the selected topic and difficulty level.
            </div>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
            >
              How can I reset my password?
            </button>
          </h2>
          <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You can reset your password by clicking on "Forgot Password" on the login page and following the instructions.
            </div>
          </div>
        </div>

        {/* FAQ Item 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
            >
              How can I contact support?
            </button>
          </h2>
          <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You can reach out to our support team via email at support@aitutor.com or through our contact form.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Faqs;
