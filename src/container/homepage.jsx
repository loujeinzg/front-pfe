import React from 'react';
import Header from '../homeComponents/header';
import Home from '../homeComponents/home';
import Features from '../homeComponents/features';
import Reviews from '../homeComponents/reviews';
import AboutUs from '../homeComponents/aboutus';
import Footer from '../homeComponents/footer';
import '../homeComponents/homestyel.css';// Importer le CSS pour la section Home

function Homepage() {
  return (
    <div className="homepage" >
    <Header />
    <Home />
    <Features />
    <Reviews />
    <AboutUs />
    <Footer />
  </div>
  );
}

export default Homepage;
