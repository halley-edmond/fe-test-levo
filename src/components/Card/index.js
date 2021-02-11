//import packages from node modules
import React,{useContext} from "react";
import PropTypes from "prop-types";

//import context
import {AppContext} from "../../App/provider";

export default function Card({date,heading,description,link,index}){

  const {state} = useContext(AppContext);
  const {primary,secondary,tertiary} = state.card;

  //define private function
  const cardStyleModifier = () =>{
    const columnNo = index % 3;
    const getFlag = () =>{
      switch (columnNo) {
        case 0:
          return `primary${primary?' '+primary:''}`;
        case 1:
          return `secondary${secondary?' '+secondary:''}`;
        case 2:
          return `tertiary${tertiary?' '+tertiary:''}`;
        default:
          return 'primary';
      }
    };
    return `card--${getFlag()}`;
  };

  return (
      <div className={`col-lg-4 mb-3 card-column`}>
        <div className={`p-4 card ${cardStyleModifier()} d-flex justify-content-between`}>
          <div className={"card__body"}>
            <div className={"card__date text-light font-weight-bold"}>{date}</div>
            <h6 className="card__heading text-light">{heading}</h6>
            <p className="card__description text-light">{description}</p>
          </div>
          <div className={"card__footer"}>
            <a href={link} target={"_blank"} rel={"noopener noreferrer"} className={"text-uppercase btn btn-sm btn-outline-light card__read-more font-weight-bold"}>Read More</a>
          </div>
        </div>
      </div>
  );
};

Card.propType = {
  date: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.number,
};


