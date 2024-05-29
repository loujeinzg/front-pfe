import React from 'react';
import logo from './img/logo/logo.png';


const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <a href="#" className="logo">
            <img src={logo} alt="Logo" className="img-cart" />
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            voluptatibus?
          </p>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <a href="#" className="links"><i className="fas fa-phone"></i> +123-456-7890</a>
          <a href="#" className="links"><i className="fas fa-phone"></i> +111-222-3333</a>
          <a href="#" className="links"><i className="fas fa-envelope"></i> ins-solutions@gmail.com</a>
          <a href="#" className="links"><i className="fas fa-map-marker-alt"></i> Agadir, Morocco - 80000</a>
        </div>
        <div className="box">
          <h3>Quick Links</h3>
          <a href="home" className="links"><i className="fas fa-arrow-right"></i> Home</a>
          <a href="features" className="links"><i className="fas fa-arrow-right"></i> Features</a>
          <a href="reviews" className="links"><i className="fas fa-arrow-right"></i> Reviews</a>
          <a href="aboutus" className="links"><i className="fas fa-arrow-right"></i> About Us</a>
        </div>
        {/* <div className="box">
          <h3>Newsletter</h3>
          <p>Subscribe for the latest updates</p>
          <input type="email" placeholder="Enter your email" className="email" />
          <input type="submit" value="Subscribe" className="btn" />
        </div> */}
      </div>
      <div className="credit">© 2024 INS SOLUTIONS</div>
    </section>
  );
};

export default Footer;
