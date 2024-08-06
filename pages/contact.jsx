import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion"; // Ensure framer-motion is installed
import "./styles/contact.scss"; // Import your SCSS file

export default function Contact() {
  const linkedInImage = "/linkedin.png"; // Path to your LinkedIn image

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for form submission status
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Reference for the form
  const form = useRef();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "" || !formData.email.includes("@")) {
      // Handle form validation errors
      return;
    }

    // Form data is valid, proceed with submission
    localStorage.setItem("formData", JSON.stringify(formData));
    setIsFormSubmitted(true);

    // Render the last submission to the page
    console.log(formData);
  };

  // Send email with emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w4b10i6", "template_kg2bmq2", form.current, {
        publicKey: "7fbEPFKwQg92_gfOL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Reset form fields after submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          // Clear "Message sent!" text after a delay
          setTimeout(() => {
            setIsFormSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className="page1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="contactContainer">
        <h1>Contact Me</h1>

        <div className="divider"></div>

        <div className="contactTextContainer">
          <p>Have a question or want to get in touch?</p>
          <p>Feel free to reach out!</p>
          <p>
            Fill out the form below, email me, or check out one of the links
            below.
          </p>
          <div className="divider3"></div>
        </div>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          {isFormSubmitted && (
            <motion.p
              className="model"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <p>Message sent!</p>
            </motion.p>
          )}
          <p>Send me a message</p>
          <input
            className="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            className="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          <textarea
            className="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message..."
          ></textarea>
          <button className="button" type="submit">
            Send
          </button>
        </form>

        <div className="contactInfo">
          <ul>
            <li>
              <a href="mailto:PaulRuszkay@gmail.com">
                📧 Email: PaulRuszkay@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/PaulRusz">
                📁 GitHub: github.com/PaulRusz
              </a>
            </li>
            <li>
              <img src={linkedInImage} className="linkedIn" alt="LinkedIn" />
              <a href="https://www.linkedin.com/in/paul-ruszkay-a2ba075b/">
                LinkedIn - Paul Ruszkay
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
