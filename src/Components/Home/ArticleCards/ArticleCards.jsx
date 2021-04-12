import React from "react";
import { Link } from "react-router-dom";

import "./cards.css";

const ArticleCards = () => (
  <div id="article-row-parent">
    <h3 id="most-recent">3 most recent news articles</h3>
    <div className="article-row">
      <div className="article-card">
        <Link to="/single-article" className="article-link">
          <h3 className="article-card-inner">Article1</h3>
        </Link>
        <div className="article-card-inner">
          <p className="article-card-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus molestias nihil quae enim ut? Corrupti suscipit, vero
            atque illum repellendus aliquam, voluptatibus eos modi
            necessitatibus animi recusandae eligendi molestias voluptate! Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="article-card">
        <Link to="/single-article" className="article-link">
          <h3 className="article-card-inner">Article2</h3>
        </Link>
        <div className="article-card-inner">
          <p className="article-card-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus molestias nihil quae enim ut? Corrupti suscipit, vero
            atque illum repellendus aliquam, voluptatibus eos modi
            necessitatibus animi recusandae eligendi molestias voluptate! Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="article-card">
        <Link to="/single-article" className="article-link">
          <h3 className="article-card-inner">Article3</h3>
        </Link>
        <div className="article-card-inner">
          <p className="article-card-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus molestias nihil quae enim ut? Corrupti suscipit, vero
            atque illum repellendus aliquam, voluptatibus eos modi
            necessitatibus animi recusandae eligendi molestias voluptate! Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleCards;
