import React from "react";
import Header from "../components/header";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <Header />

      {/* Poster Section */}
      <div className="about-banner">
        
      </div>

      {/* Who We Are Section */}
      <div className="who-we-are">
        <div className="text-content">
          <h2>ABOUT</h2>
          <h1>Who We Are</h1>
          <p>
            With over 14 years of unwavering excellence in IT rentals and sales, 
            A&S Computer Services, headquartered in Delhi NCR, India, has positioned 
            itself as one of the fastest-growing and most trusted companies in the 
            IT solutions industry. Established in 2010 as SDR Infosystems Pvt. Ltd., 
            we rebranded in 2017 to A&S Computer Services, reflecting our evolving 
            expertise and focus on comprehensive IT service integration.
          </p>
          <p>
            At A&S Computer Services, we are dedicated to helping businesses modernize 
            and streamline their IT infrastructure. By offering a wide range of premium 
            solutions in IT rentals, IT sales, AMC & FMS services, and advanced printing 
            solutions, we ensure that our clients have access to the latest technology 
            and unparalleled support. Our commitment to quality and customer satisfaction 
            has made us a go-to partner for businesses looking to stay ahead in an ever-evolving 
            technological landscape.
          </p>
        </div>
        <div className="images">
          <img src="../assets/about1.jpg" alt="Tech Work" />
          <img src="../assets/about2.jpg" alt="Repairing Laptop" />
          <img src="../assets/about3.jpg" alt="Tech Engineer" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <img src="/images/icon.png" alt="icon" className="card-icon" />
          <h3>Qualified Service</h3>
          <p>
            Get top-quality laptops, MacBooks, and refurbished products with 
            support from our qualified engineers. Reliable, affordable, and eco-friendly!
          </p>
        </div>
        <div className="card">
          <img src="/images/icon.png" alt="icon" className="card-icon" />
          <h3>Always Available</h3>
          <p>
            Count on us whenever you need! With a wide range of laptops, 
            MacBooks, and IT products, we’re ready to serve you anytime 
            with reliable solutions and support.
          </p>
        </div>
        <div className="card">
          <img src="/images/icon.png" alt="icon" className="card-icon" />
          <h3>Quick Response</h3>
          <p>
            Your time matters! Our team ensures fast and efficient support, 
            providing solutions to your IT needs without delay. We're here 
            when you need us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
