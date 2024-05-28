import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight } from "react-icons/fi";



const Home = () => {
  return (
     <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />  
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Your Favourite Food Delivered - Hot & Fresh !
                </h1>
                <p className="primary-heading">
                Indulge Your Cravings: Order Delicious Meals with Ease!
                </p>
                <p>
                    <button className="secondary-text">
                        Order Now <FiArrowRight />
                    </button>
                </p>
            </div>
        </div>
     </div>
  );
};

export default Home;