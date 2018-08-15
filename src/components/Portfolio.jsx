import React from "react";

import PortfolioItem from "./PortfolioItem";
import PortfolioItemDesc from "./PortfolioItemDesc";

const Portfolio = props => {
  return (
    <React.Fragment>
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <PortfolioItem
              href="#cheninblanc"
              imgSrc="img/portfolio/Chenin Blanc.jpg"
              alt="Chenin Blanc"
              muted="Logo Design"
            />

            <PortfolioItem
              href="#thecircularsquare"
              imgSrc="img/portfolio/The Circular Square.jpg"
              alt="The Circular Square"
              muted="Logo Design"
            />
          </div>
        </div>
      </section>

      <PortfolioItemDesc
        id="cheninblanc"
        title="Chenin Blanc"
        type="Logo Design(Adobe Illustrator)"
        imgSrc="img/portfolio/Chenin Blanc.jpg"
      >
        <p>
          -Brand Name
          <br />
          CHENIN BLANC
          <br />
          <br />
          -Industry of the Brand
          <br />
          Fashion,Household,Cosmetics,Jewelry,Fine Dinning,etc.
          <br />
          <br />
          -Brand Positioning
          <br />
          Middle and high end products in the above industries
          <br />
          <br />
          -Iconic Color of the Brand(Package Wrapping and Store Decoration)
          <br />
          Royal green and Gold, but the color of the logo can use other colors
          if any better
          <br />
          <br />
          -Elements of the logo
          <br />
          Pattern of plants or letters is recommended
          <br />
          <br />
          -Visual Effect
          <br />
          Deluxe,simple,elegant, unique, creative and impressive
          <br />
          <br />
        </p>
        <ul className="list-inline">
          <li>Date: 10 September 2017</li>
          <li>Client: novemberspring</li>
          <li>Category: Logo Design</li>
        </ul>
      </PortfolioItemDesc>

      <PortfolioItemDesc
        id="thecircularsquare"
        title="The Circular Square"
        type="Logo Design(Adobe Illustrator)"
        imgSrc="img/portfolio/The Circular Square.jpg"
      >
        <img
          className="img-fluid d-block mx-auto"
          src="img/portfolio/The Circular Square 1.jpg"
          alt=""
        />
        <p>
          -Business Name
          <br />
          THE CIRCULAR SQUARE
          <br />
          <br />
          -Industry of the Business
          <br />
          This business is about a place which offers all of the following in a
          single premise
        </p>
        <ol type="a">
          <li>
            Live events (music, standup, poem recitals, talks on varied topics
            such as technology/startups etc.)
          </li>
          <li>
            Workshop (for varied topics e.g crafts, storytelling, fitness, food,
            foreign language introduction etc.)
          </li>
          <li>Small cafe with tea/coffee/snacks-shorteats.</li>
          <li>Good collection of books and reading space.</li>
          <li>Coworking and costudying space.</li>
          <li>High speed wifi.</li>
        </ol>
        The place is spread over 2 floors, with a garden and terrace as well.
        This place is being setup in an area which does not have such a facility
        in nearby vicinity.
        <br />
        <br />
        -Iconic Color of the Busiess
        <br />
        Gender Neutral colors.
        <br />
        <br />
        -Elements of the logo
        <br />
        Pattern of plants or letters is recommended
        <br />
        <br />
        -Visual Effect
        <br />
        Simple
        <br />
        <br />
        <ul className="list-inline">
          <li>Date: 05 September 2017</li>
          <li>Client: Arti Subramanian</li>
          <li>Category: Graphic Design</li>
        </ul>
      </PortfolioItemDesc>
    </React.Fragment>
  );
};

export default Portfolio;
