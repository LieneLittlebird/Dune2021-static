import React from "react";
import ArticleCards from "./ArticleCards/ArticleCards";
import ImageSlider from "./Slider/ImageSlider";
import SliderData from "./Slider/SliderData";
import "./home.css";

const Home = () => (
  <div>
    <ImageSlider
      slides={SliderData}
      arrowStyle={{ color: "black", offset: 200 }}
    />
    <div className="home-cards-parent">
      <ArticleCards />
      <ArticleCards />
      <ArticleCards />
    </div>
  </div>
);

export default Home;
