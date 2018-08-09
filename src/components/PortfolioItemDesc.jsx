import React from "react";

const PortfolioItemDesc = props => {
  return (
    <div
      className="portfolio-modal modal fade"
      id={props.id}
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  <h2>{props.title}</h2>
                  <p className="item-intro text-muted">{props.type}</p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={props.imgSrc}
                    alt={props.title}
                  />
                  {props.children}
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i className="fa fa-times" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemDesc;
