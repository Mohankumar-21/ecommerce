import React from 'react';
import men from '../img/men4.webp';
import women from '../img/women2.jpg';
import ele from '../img/ele2.jpg';
import jewel from '../img/jewel1.jpg';
import '../Styles/slider.css';

const Slider = () => {
  return (
    <div id="carouselExampleAutoplaying" class="carousel carousel-light slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
    <div class="carousel-inner">
      <div class="carousel-item drk active" data-bs-interval="2000">
        <img src={women} class="d-block img-fluid c-item" alt="f1"/>
        <div class="carousel-caption text-white">
            <h3>Explore our clothing collections</h3>
            <p>Elevate your everyday style with our curated women's fashion essentials.</p>
          </div>
      </div>
      <div class="carousel-item drk" data-bs-interval="2000">
        <img src={ele} class="d-block img-fluid c-item" alt="f2"/>
        <div class="carousel-caption text-white">
            <h3>Your Ultimate Electronics Destination</h3>
            <p>Discover the latest in tech with our collection.</p>
          </div>
      </div>
      <div class="carousel-item drk">
        <img src={men} class="d-block img-fluid  c-item" alt="f3"/>
        <div class="carousel-caption text-white">
            <h3>Top off your look</h3>
            <p>Upgrade your wardrobe with our stylish men's clothing collection.</p>
          </div>
      </div>
      <div class="carousel-item drk">
        <img src={jewel} class="d-block img-fluid c-item" alt="f4"/>
        <div class="carousel-caption text-white">
            <h3>Glamour Gems: Discover Exquisite Jewelry Treasures</h3>
            <p>Explore our stunning jewelry collection for timeless beauty..</p>
          </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    
  </div>

  );
}

export default Slider;
