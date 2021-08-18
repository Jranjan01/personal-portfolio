import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contact.css";

import { toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
toast.configure();
function Contact() {
  // useEffect For animation
  useEffect(() => {
    AOS.init({ duration: 1000 });

    AOS.refresh();
  }, []);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          toast.success(" message send successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.error("Something Error , Try Again !!", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    e.target.reset();
  }

  return (
    <header className="container-fluid pb-4" id="contact">
      <h2 className="text-center get_touch" id="send-msg">
        Get In Touch
      </h2>

      <div className="container contact_area">
        <form
          id="contact-form"
          onSubmit={sendEmail}
          autoComplete="off"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <label>Name :</label>
          <input
            className="input-field text-white"
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <label>Subject :</label>
          <input
            className="input-field text-white"
            type="text"
            required
            placeholder="Subject"
            name="subject"
          />

          <label>Email Address :</label>
          <input
            className="input-field text-white"
            type="email"
            name="email"
            placeholder="webdev@gmail.com"
            required
          />

          <label>Message :</label>
          <textarea
            className="input-field text-white"
            name="message"
            placeholder="Message...."
            required
          ></textarea>

          <input id="submit-btn" type="submit" value="SEND" />
        </form>
        <small className="text-white " style={{ fontFamily: "serif" }}>
          copyright &copy; 2021-2022
        </small>
      </div>
    </header>
  );
}

export default Contact;
