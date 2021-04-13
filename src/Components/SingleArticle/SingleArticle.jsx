/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageSlider from "../Home/Slider/ImageSlider";
import AlbumData from "./AlbumData";
import "./single.css";
import single2 from "../../Assets/images/single2.jpg";
import single4 from "../../Assets/images/single4.jpg";
import single5 from "../../Assets/images/single5.jpg";

const SingleArticle = () => {
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const galleryStyle = { display: "none" };

  if (isGalleryVisible) {
    galleryStyle.display = "flex";
  }

  const togglegallery = () => {
    setIsGalleryVisible(!isGalleryVisible);
  };

  return (
    <div>
      <div id="gallery-row-main">
        <div id="gallery-first-row" onClick={togglegallery}>
          <img src={single2} alt="" id="large-img" />
          <div id="gallery-second-row">
            <img src={single5} alt="" />
            <img src={single2} alt="" />
            <img src={single4} alt="" />
          </div>
          <div id="gallery-second-row">
            <img src={single5} alt="" />
            <img src={single2} alt="" />
            <img src={single4} alt="" />
          </div>
        </div>
        <div id="single-article-text">
          <h2 id="single-article-h2"> Dune delayed to October 1st, 2021</h2>
          <p className="single-article-p">
            Dune is the latest movie to get{" "}
            <Link
              to="https://www.theverge.com/2020/10/5/21453047/dune-delay-release-date-warner-bros-wonder-woman-disney-marvel-black-widow"
              className="article-card-link"
            >
              pushed back to 2021
            </Link>
            , following a number of other highly anticipated blockbuster films,
            including Black Widow and No Time to Die. It’ll now be released on
            October 1st, 2021 — nearly a full year after the original December
            18th release date, Collider and The Wrap have reported.
          </p>
          <p className="single-article-p">
            The Dune delay comes after Regal and Cineworld announced that it
            would be shuttering all of its theaters in the US and the UK,
            following the delay of No Time to Die last week. With more and more
            major films that were originally scheduled to debut this fall moving
            to 2021 due to concerns over the ongoing COVID-19 pandemic, there’s
            simply not enough new content for theaters to show right now.
          </p>
          <p className="single-article-p">
            Dune’s changed release date isn’t too much of a surprise, as studios
            are continuously trying to figure out the best time to release their
            biggest movies. Warner Bros. already delayed another of its movies,
            Wonder Woman 1984, from October to December 25th. Industry insiders
            assumed that with Wonder Woman 1984 moving to December, the same
            month that Dune was originally scheduled to be released, Denis
            Villeneuve’s adaptation would likely be punted to 2021.
          </p>

          <p className="single-article-p">
            Warner Bros. is giving itself some wiggle room, though. When the
            studio premiered the first Dune trailer in September, the film’s
            release date was specifically left out. All the trailer said is
            “coming to theaters.” It seems like Warner Bros. learned from its
            experience with Christopher Nolan’s Tenet, which was delayed a few
            times leading to marketing kerfuffles.
          </p>
          <p className="single-article-p">
            Keeping dates out of trailers isn’t the only thing Warner Bros.
            learned from Tenet. The studio released the film internationally on
            August 26th, before bringing it to the United States and China on
            September 3rd. The film was only able to play in select cities and
            was kept out of key markets like Los Angeles and New York City.
            Tenet has only generated $36.1 million Stateside, but the film has
            seen much bigger success internationally, racking up more than $203
            million. While that doesn’t make the film profitable for Warner
            Bros., it may be enough incentive to keep Wonder Woman 1984 in the
            December 25th spot, while moving Dune to a period when more people
            may be able to get to movie theaters.
          </p>
          <p className="single-article-p">
            Warner Bros. isn’t the only studio in this position, either. Disney
            has delayed many of its big films, including Black Widow. Scarlett
            Johansson’s standalone Marvel movie will now open on May 7th, 2021,
            instead of November 6th, 2020. This makes 2020 the first year
            without a Marvel Cinematic Universe film since 2009. As part of the
            delay, other Marvel titles like Shang-Chi and the Legend of the Ten
            Rings and The Eternals are also delayed. Meanwhile, West Side Story
            and The King’s Man, two films Disney inherited from its acquisition
            of 21st Century Fox, also moved to 2021.Is it fair to say that 2020
            is mostly a wash for film studios? Sure. Only a handful of major
            blockbusters still remain on the theatrical schedule for this year
          </p>
        </div>
        <div id="gallery-opened" style={galleryStyle}>
          <button type="button" id="gallery-button-x" onClick={togglegallery}>
            X
          </button>
          <ImageSlider
            slides={AlbumData}
            arrowStyle={{ color: "white", offset: -100 }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
