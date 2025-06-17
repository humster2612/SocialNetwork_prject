import React from 'react';
import Slider from 'react-slick';
import '../components/Destination.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const destinations = [
  {
    city: 'Tokyo',
    country: 'Japan',
    image: 'https://i.pinimg.com/736x/c8/7a/57/c87a57b2ed8c00a843cc39c584c40aab.jpg',
    description: 'Iconic Shibuya Crossing and futuristic skyline.',
  },
  {
    city: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    description: 'Home to the Eiffel Tower and timeless romance.',
  },
  {
    city: 'New York',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc', // Times Square
    description: 'Vibrant Times Square and iconic skyline.',
  }
  
];

const Destination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
  };

  return (
    <div className="destination-page">
      <div className="map-background" />
      <h1>🌍 Explore Top Destinations</h1>
      <p className="intro">Discover iconic places and world-famous landmarks!</p>

      <div className="slider-wrapper">
        <Slider {...settings}>
          {destinations.map((place, index) => (
            <div className="slide-card" key={index}>
              <img src={place.image} alt={`${place.city} view`} />
              <div className="slide-info">
                <h2>{place.city}</h2>
                <div className="location">{place.country}</div>
                <p className="description">{place.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Destination;
