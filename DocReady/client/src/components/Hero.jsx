import React from "react";
import image from "../images/healthmain.jpg";
import "../styles/hero.css";

// component of home page 
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          One Click Away
        </h1>
        <p>
        Welcome to <b>DocReady</b>, where Your Health is Our Responsibility. 
        Our mission is to make healthcare access simple and convenient for everyone. 
        We recognize the importance of timely medical care and aim to eliminate 
        the hassle of booking doctor appointments. With our intuitive platform, 
        you can effortlessly explore available doctors, review their specialties, 
        and schedule appointments that fit your schedule. Our dedicated team is 
        committed to ensuring a smooth journey to wellness, from finding the 
        right doctor to confirming your appointment. Your health is our priority, 
        and we are proud to be your trusted partner in achieving better well-being. 
        Experience a new level of ease in managing your health with us.
        </p>
      </div>
      <div className="healthmain">
        <img
          src={image}
          alt="health"
          width="600" 
          height="400"
        />
      </div>
    </section>
  );
  
};

export default Hero;
