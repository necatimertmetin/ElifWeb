// src/components/pages/Home.js

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../../assets/css/home.css';
import featuresData from '../../data/features.json';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {


  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    useTransform: true
  };



  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your App</h1>
          <p>Your tagline or a brief description goes here.</p>
          <button>Get Started</button>
        </div>
      </section>
      <section className='home-slider-section'>
        <Slider {...settings}>
          {featuresData.map((feature, index) => (
            <div key={index} className={`home-slider-feature`}>
              <img src={feature.backgroundImage} alt="" className="background-img" />
              <div className="content">
                <div>{feature.title}</div>
                <div>{feature.description}</div>
              </div>
            </div>



          ))}
        </Slider>
      </section>
      <section className="testimonial">
        <div className="testimonial-content">
          <h2>What People are Saying</h2>
          <p>"A great quote from a satisfied user."</p>
          <p>- John Doe</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
