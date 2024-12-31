import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS keys
    const serviceID = "service_0z0p37u";
    const templateID = "template_njql8fp";
    const userID = "wtlF0v-ldMIpQ7n2w";

    // Prepare EmailJS payload
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Thank you for reaching out! We'll get back to you soon.");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send the message. Please try again later.");
      });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
