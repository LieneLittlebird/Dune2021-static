import React from "react";
import ArticleCards from "./ArticleCard/ArticleCard";
import ImageSlider from "./Slider/ImageSlider";
import SliderData from "./Slider/SliderData";
import "./home.css";

const Home = () => (
  <div id="home-main">
    <div id="ImageSlider">
      <ImageSlider
        slides={SliderData}
        arrowStyle={{ color: "black", offset: 200 }}
      />
      <div id="home-h1">
        <h1>Most recent articles:</h1>
      </div>
      <div className="home-cards-parent">
        <ArticleCards />
        <ArticleCards />
        <ArticleCards />
      </div>
    </div>
  </div>
);

export default Home;
