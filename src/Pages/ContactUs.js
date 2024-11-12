import React, { useState } from "react";
import "./ContactUs.css"; // Make sure to create a separate CSS file for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can integrate this with an API or handle it as needed
    alert("Your message has been sent!");
    // Clear the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="form-group subject-group">
          <label>Select Subject?</label>
          <div>
            <input
              type="radio"
              name="subject"
              value="general"
              checked={formData.subject === "general"}
              onChange={handleChange}
            />{" "}
            General Inquiry
            <input
              type="radio"
              name="subject"
              value="know-more"
              checked={formData.subject === "know-more"}
              onChange={handleChange}
            />{" "}
            Know more
          </div>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
