import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            
            <h3>Why Choose Us?</h3>
            <p>
            Our mission is to transform healthcare accessibility. With an 
            intuitive interface, we simplify the process of finding, connecting 
            with, and scheduling appointments with qualified healthcare professionals. 
            From routine check-ups to specialized care or even a second opinion, 
            we’re here to support you every step of the way.
            </p>
            <h3>Our Approach</h3>
            <p>
              What sets us apart is our dedication to creating a healthcare
              experience that revolves around you. Our platform is designed to
              empower patients with information, streamline the appointment
              process, and foster a collaborative relationship between doctors
              and patients.
            </p>
            <h3>Quality Care, Just a Click Away</h3>
            <p>
              We've curated a network of reputable doctors covering various
              specialties to ensure you have options that meet your unique
              healthcare needs. Our commitment to quality care is unwavering,
              and we continually strive to enhance our platform to serve you
              better.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
