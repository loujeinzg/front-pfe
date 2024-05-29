import React from 'react';
import ins from "./img/aboutus/ins.png";
import jira from "./img/aboutus/jira.png";
import doc from "./img/aboutus/doc.png";

const AboutUs = () => {
  return (
    <section className="aboutus" id="aboutus">
      <h1 className="heading"><span>About Us</span></h1>
      <div className="box-container">
        <div className="box">
          <img src={ins} alt="" />
          <div className="content">
            <h3>INS SOLUTIONS</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
              aliquam!
            </p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
        <div className="box">
          <img src={jira} alt="" />
          <div className="content">
            <h3>Jira Software</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
              aliquam!
            </p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
        <div className="box">
          <img src={doc} alt="" />
          <div className="content">
            <h3>Our Developers</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
              aliquam!
            </p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
