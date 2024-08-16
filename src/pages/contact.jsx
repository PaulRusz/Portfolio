import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import styles from "../styles/contact.module.scss";
import linkedin from "../assets/images/linkedin.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_w4b10i6",
        "template_kg2bmq2",
        form.current,
        "7fbEPFKwQg92_gfOL"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setIsFormSubmitted(true);

          setTimeout(() => {
            setIsFormSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <motion.div
      className={styles.contactContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <h1>Contact Me</h1>
      <div className={styles.divider}></div>

      <div className={styles.contactTextContainer}>
        <p>Want to get in touch?</p>
        <p>Feel free to reach out!</p>
        {/* <p>
          Fill out the form below, email me, or check out one of the links
          below.
        </p> */}
        <div className={styles.divider3}></div>
      </div>

      <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
        {isFormSubmitted && (
          <motion.p
            className={styles.messageSent}
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
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message..."
        ></textarea>
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>

      <div className={styles.contactInfo}>
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
            <img src={linkedin} className={styles.linkedIn} alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/paul-ruszkay-a2ba075b/">
              LinkedIn - Paul Ruszkay
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
