import React from "react";

const PortfolioItem = props => {
  return (
    <div className="col-md-4 col-sm-6 portfolio-item">
      <div className="card custom-card">
        <a className="portfolio-link" data-toggle="modal" href={props.href}>
          <img className="img-fluid" src={props.imgSrc} alt={props.alt} />
        </a>
        <div className="portfolio-caption">
          <h4>{props.alt}</h4>
          <p className="text-muted">{props.muted}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
