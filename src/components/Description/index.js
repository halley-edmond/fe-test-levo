//import packages from node modules
import React,{useContext} from "react"
import PropTypes from "prop-types"

import {AppContext} from "../../App/provider";

export default function Description({className='',children}) {
  const {state} = useContext(AppContext)
  const {fontSize,fontColor} = state.description;
  return (
      <p style={fontSize?{fontSize}:null} className={`${fontColor?fontColor:'text-muted'} ${className?' '+className:''}`}>
        {children}
      </p>
  )
}

Description.propType ={
  className: PropTypes.string,
  children: PropTypes.array
};