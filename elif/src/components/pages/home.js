// src/components/pages/Home.js

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../../assets/css/home.css';
import featuresData from '../../data/features.json';
import imageLinks from '../../data/imageLinks.json';
import { getPalette } from '../utils/getPalette';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = ({ paletteName }) => {

  const palette = getPalette(paletteName);
  const [flippedCards, setFlippedCards] = useState([]);


  const cards = [
    { id: 1, frontText: 'Front Side 1', backText: 'Back Side 1', frontBackgroundColor: palette.content2, backBackgroundColor: palette.main, frontTopImg: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" },
    { id: 2, frontText: 'Front Side 2', backText: 'Back Side 2', frontBackgroundColor: palette.content1, backBackgroundColor: palette.main, frontTopImg: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"  },
    { id: 3, frontText: 'Front Side 3', backText: 'Back Side 3', frontBackgroundColor: palette.content2, backBackgroundColor: palette.main, frontTopImg: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"  },
  ];


  const handleCardFlip = (id) => {
    setFlippedCards((prevFlippedCards) => {
      if (prevFlippedCards.includes(id)) {
        return prevFlippedCards.filter((cardId) => cardId !== id);
      } else {
        return [...prevFlippedCards, id];
      }
    });
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    useTransform: true
  };

  const handleButtonHover = (element) => {
    element.style.backgroundColor = palette.content2;
    element.style.color = palette.button;
  };

  const handleButtonHoverOut = (element) => {
    element.style.backgroundColor = palette.button;
    element.style.color = palette.content2;
  };

  return (
    <div style={{ backgroundColor: palette.background }}>

      <div className="home-landing-wrapper" style={{ borderColor: palette.content1, backgroundColor: palette.content1 }}>
        <div className='home-landing-left' style={{ backgroundImage: `url(${imageLinks[0].Landing.backgroundImage})`, color: palette.content1 }}>
          <div className='home-landing-left-title'>LIPSUM</div>

        </div>
        <div className='home-landing-right' style={{ backgroundColor: palette.main }}>
          <div className='home-landing-right-title-container'>
            <div className='home-landing-right-title' style={{ color: palette.content2 }}>
              Explore Your Own&nbsp;<span className='home-landing-right-subtitle' style={{ color: palette.content1 }}>Style</span>

            </div>
            <div className='home-landing-right-p' style={{ color: palette.content2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur purus a lorem pellentesque dictum. Aenean venenatis, metus id finibus dignissim, tellus orci tempus augue, id pellentesque metus risus at nunc.
            </div>
          </div>
          <hr style={{ width: "100%", borderTop: "double" }} />
          <div className='home-landing-right-button-container' style={{ color: palette.content2 }}>
            <div className='home-landing-right-button-container-title'>Let's Discover Our Collections</div>

            <div className='home-landing-right-button-wrapper'>

              <button
                className='home-landing-right-button'
                style={{ backgroundColor: palette.button, color: palette.content2 }}
                onMouseOver={(e) => handleButtonHover(e.target)}
                onMouseOut={(e) => handleButtonHoverOut(e.target)}
              >
                Login
              </button>
              <button
                className='home-landing-right-button'
                style={{ backgroundColor: palette.button, color: palette.content2 }}
                onMouseOver={(e) => handleButtonHover(e.target)}
                onMouseOut={(e) => handleButtonHoverOut(e.target)}
              >
                Create an account
              </button>

            </div>
          </div>
        </div>

      </div>


      <div className='home-info-container' style={{ backgroundColor: palette.background }} >
        <div className='home-cards-container'>
          {cards.map((card) => (
            <div key={card.id} className={`home-card card ${flippedCards.includes(card.id) ? 'flipped' : ''}`} onClick={() => handleCardFlip(card.id)}>
              <div className="card-side front" style={{ backgroundColor: card.frontBackgroundColor }}>
                <div className='card-front-top card-half'>
                  <img src={card.frontTopImg} alt="Front Image" />
                </div>
                <div className='card-front-bottom card-half'>
                  {card.frontText}
                </div>
              </div>
              <div className="card-side back" style={{ backgroundColor: card.backBackgroundColor }}>
                <div className='card-back-top card-half'>
                  {card.backText}
                </div>
                <div className='card-back-bottom card-half'>
                  {card.backText}
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
      <div className='home-slider-container'>
        <Slider {...settings}>
          {featuresData.map((feature, index) => (
            <div key={index} className={`home-slider-feature`}>
              <img src={feature.backgroundImage} alt="" className="background-img" />
              <div className="home-slider-content">
                <div>{feature.title}</div>
                <div>{feature.description}</div>
              </div>
            </div>



          ))}
        </Slider>
      </div>
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
