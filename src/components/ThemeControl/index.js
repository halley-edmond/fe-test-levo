//import packages from node modules

import React,{useContext,useState} from "react";
import renderHTML from "react-render-html";
import {AppContext} from "../../App/provider";

//import shared component
import DropdownList from "../DropdownList";


//import internals
import ThemeConfig from "./config";

export default function ThemeControl(){
  const {state,actions} = useContext(AppContext);
  const [open,setOpen] = useState(true);

  const onReset = (e) => {
    e.preventDefault();
    actions.resetTheme();
  };
  const onClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const onOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };


  const renderFontFamilyStyle = ()=>{
    const {fontFamily} = state;
    if(fontFamily){
      return (
          renderHTML(`<style>
            body{
                font-family:${fontFamily}
            }
            </style>`)
      );
    }
    return (<></>);
  };

  const renderDropdownList = () => {
    return (
        <div className={"container d-flex flex-wrap justify-content-center"}>
          <DropdownList
              value={state.fontFamily}
              label={"Font Family"}
              list={ThemeConfig.fontFamily}
              callback={(value) => {
                actions.updateTheme({
                  ...state,
                  fontFamily: value
                })
              }}/>
          <DropdownList
              value={state.heading.fontSize}
              label={"Heading Font Size"}
              list={ThemeConfig.headingFontSize}
              callback={(value) => {
                actions.updateTheme({
                  ...state,
                  heading: {
                    ...state.heading,
                    fontSize: value
                  }
                })
              }}/>
          <DropdownList
              value={state.heading.fontColor}
              label={"Heading Font Color"}
              list={ThemeConfig.fontColor}
              callback={(value) => {
                actions.updateTheme({
                  ...state,
                  heading: {
                    ...state.heading,
                    fontColor: value
                  }
                })
              }}/>
          <DropdownList
              value={state.description.fontSize}
              label={"Description Font Size"}
              list={ThemeConfig.descriptionFontSize}
              callback={(value) => {
                actions.updateTheme({
                  ...state,
                  description: {
                    ...state.description,
                    fontSize: value
                  }
                })
              }}/>
          <DropdownList
              value={state.description.fontColor}
              label={"Description Font Color"}
              list={ThemeConfig.fontColor}
              callback={(value) => {
                actions.updateTheme({
                  ...state,
                  description: {
                    ...state.description,
                    fontColor: value
                  }
                })
              }}/>
          <DropdownList
              value={state.card.primary}
              label={"Card Primary"}
              list={ThemeConfig.cardColor}
              callback={(value) => {
                actions.updateTheme({
                  ...state,
                  card: {
                    ...state.card,
                    primary: value
                  }
                })
              }}/>
          <DropdownList
              value={state.card.secondary}
              label={"Card Secondary"}
              list={ThemeConfig.cardColor}
              callback={(value) => {
                actions.updateTheme({
                  ...state,
                  card: {
                    ...state.card,
                    secondary: value
                  }
                })
              }}/>
          <DropdownList
              value={state.card.tertiary}
              label={"Card Tertiary"}
              list={ThemeConfig.cardColor}
              callback={(value) => {
                actions.updateTheme({
                  ...state,
                  card: {
                    ...state.card,
                    tertiary: value
                  }
                })
              }}/>
        </div>
    );
  };

  const renderCTA = ()=> {
    return (
        <div className={"pb-5 container d-flex flex-wrap justify-content-center"}>
          <button onClick={onReset} className={"m-1 btn btn-sm btn-danger"}>Reset</button>
          <button onClick={onClose} className={"m-1 btn btn-sm btn-secondary"}>Close</button>
        </div>
    );
  };

  if(open){
    return (
        <div className={"theme-control"}>
          {renderFontFamilyStyle()}
          {renderDropdownList()}
          {renderCTA()}
        </div>
    );
  }
  return (
      <div className={"container d-flex flex-wrap justify-content-center"}>
        <button onClick={onOpen} className={"btn btn-outline-primary btn-sm"}>Open Theme Control</button>
      </div>
  );
};