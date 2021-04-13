import React from "react";
import { Link } from "react-router-dom";

import "./cards.css";

const ArticleCards = () => (
  <div id="article-row-parent">
    <div className="article-row">
      <div className="article-card">
        <Link to="/single-article" className="article-link">
          <h3 className="article-card-inner">Dune to be screened in October</h3>
        </Link>
        <div className="article-card-inner">
          <p className="article-card-p">
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
            18th release date.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleCards;
