import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return <div className="about-section-container">
  <div className="about-background-image-container">
   <img src={AboutBackground} alt="" />
  </div>
  <div className="about-section-image-container">
    <img src= {AboutBackgroundImage} alt="" />
  </div>
  <div className="about-section-text-container">
    <p className="primary-subheading">About</p>
    <h1 className="primary-heading">
        Food  is an important part of a balanced diet
    </h1>

    <p className="primary-text">
    Food is an important part of a balanced diet. With our food ordering application, maintaining that balance has never been easier or more convenient. Our app offers a wide variety of healthy and delicious meal options, ensuring that you can always find something that meets your dietary needs and preferences. From fresh salads and nutrient-packed grain bowls to lean proteins and wholesome vegan dishes, we prioritize quality ingredients and nutritional value. Whether you're looking for a quick lunch on the go or a family dinner delivered to your door, our intuitive interface allows you to order with just a few taps. Plus, our customizable options and detailed nutritional information help you make informed choices, so you can enjoy your meals with confidence and ease. Embrace a healthier lifestyle without sacrificing taste or convenience with our seamless food ordering experience.
    </p>

    <div className="about-buttons-container">
        <button className="secondary-button">Learn More</button>
        <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>
    </div>
  </div>
  </div>

}

export default About