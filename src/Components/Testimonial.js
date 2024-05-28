import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai"
const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonials</p>
            <h1 className="primary heading">What They Are Saying</h1>
            <p className="primary-text">
            Our food ordering application has transformed the way people enjoy their meals. With a focus on healthy, high-quality ingredients and a user-friendly interface, we provide a seamless experience from browsing to delivery. Whether you're looking for a quick bite or planning your meals for the week, our app offers flexibility, speed, and variety. Join our satisfied customers and discover how easy it is to enjoy nutritious and delicious food, tailored to your lifestyle. Experience the convenience and reliability that sets us apart, and make every meal a moment to savor.
            </p>
        </div>

        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
            Absolutely love this app! The meal options are diverse and delicious, making it easy to stick to my healthy eating goals.Fast deliveries and fresh food every time. This app has made my life so much easier! .The customizable options are fantastic. I can always find something that fits my dietary needs.I've tried many food delivery services, but this one stands out for its quality and convenience.
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
         <h2>John Doe</h2>
        </div>
    </div>
  );
};

export default Testimonial;