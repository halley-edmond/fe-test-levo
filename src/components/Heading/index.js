//import packages from node modules
import React,{useContext} from "react";
import PropTypes from "prop-types";
import {AppContext} from "../../App/provider";

//main component
export default function Heading ({className,children}){
  const {state} = useContext(AppContext);
  const {fontSize,fontColor} = state.heading;
  return (
      <h1 style={fontSize?{fontSize}:null} className={`${fontColor?fontColor:'text-danger'} ${className?' '+className:''}`}>{children}</h1>
  );
}

Heading.propType ={
  children: PropTypes.array,
  className: PropTypes.string
};


