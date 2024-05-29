import React from 'react';
import teamworm from './img/features/teamworm.png';
import ink from "./img/features/ink.png";
import fusee from "./img/features/fusee.png";


const Features = () => {
  return (
    <section className="features" id="features">
      <h1 className="heading">Our <span>Features</span></h1>
      <div className="box-container">
        <div className="box">
          <img src={teamworm} alt="" />
          <h3>For You & Your Team</h3>
          <p>
            Enhance collaboration and productivity, empower your team to work smarter and achieve exceptional results together.
          </p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="box">
          <img src={ink} alt="" />
          <h3>Ink Your Own Ticket</h3>
          <p>
            Match your preferences and maximize efficiency.
          </p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="box">
          <img src={fusee} alt="" />
          <h3>Faster Process</h3>
          <p>
            Say GOODBYE to delays and HELLO to a smoother, more efficient process.
          </p>
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Features;
