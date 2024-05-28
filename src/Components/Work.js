import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
    {
        image: ChooseMeals,
        title: "Choose How Often",
        text: "Take control of your meal plan.Whether you prefer daily deliveries, weekly orders, or occasional treats, our app lets you customize your delivery frequency to fit your lifestyle.",

    },
    {
        image: DeliveryMeals,
        title: "Fast Deliveries",
        text: "Enjoy your meals without the wait. Our efficient delivery system ensures that your food arrives quickly and fresh, so you can savor delicious, nutritious meals whenever you need them.",

    },
];
  return (
  <div className="work-section-wrapper">
    <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-subheading">How It Works</h1>
        <p className="primary-text">
        Food is an important part of a balanced diet. With our food ordering application, making healthy and delicious choices has never been simpler. Our app provides an extensive menu featuring a variety of nutritious options that cater to all dietary preferences and requirements. Whether you're craving a fresh salad, a hearty grain bowl, or a protein-packed entrée, we offer meals made from high-quality, wholesome ingredients. The user-friendly interface allows you to easily browse, customize, and order your favorite dishes, ensuring you can maintain a balanced diet without the hassle of meal prep. Detailed nutritional information for each item helps you make informed decisions, so you can enjoy convenient, guilt-free dining. Prioritize your well-being and savor the ease and flavor of balanced meals with our innovative food ordering application.
        </p>
    </div>
    <div className="work-section-bottom">
        {
          workInfoData.map((data) => (
            <div className="work-section-info">
                <div className="info-boxes-img-container">
                    <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                    </div>
        ))}
     </div>
  </div>
  );
};

export default Work;