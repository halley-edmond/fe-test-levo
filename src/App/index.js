//import packages from node modules
import React,{useState,useCallback} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./main.scss";

//import shared components
import Heading from "../components/Heading";
import Description from "../components/Description";
import Card from "../components/Card";
import LoadMore from "../components/LoadMore";
import ThemeControl from "../components/ThemeControl";

//import internals
import CardData from "../data/cards";
import AppProvider from "./provider";

//main component
export default function App() {
  //define variables
  const [cardArrayList,setCardArrayList]  =  useState(CardData.list);

  //define callback functions
  const addCardToArrayCallback = useCallback(cardItem=>{
    if(cardArrayList){
      const newArrayList = Object.assign([],cardArrayList);
      newArrayList.push(cardItem);
      setCardArrayList(newArrayList);
    }
  },[cardArrayList]);

  //define render functions
  const renderCards = () =>{
    if(cardArrayList && cardArrayList.length){
      return cardArrayList.map((cardItem,index)=>(<Card {...cardItem} index={index} key={index}/>))
    }
    return (<></>);
  };

  //main render
  return (
      <AppProvider>
        <div className="app px-5-sm p-5">
          <ThemeControl />
          <div className={"container pb-3"}>
            <div className={"app__header"}>
              <Heading className={"pb-2"}>Related Articles</Heading>
              <Description className={"pb-2"}>Lorem ipsum is placeholder text commonly used in the graphic, print, and
                publishing industries for previewing layouts and visual mockups.</Description>
            </div>
          </div>
          <div className={"container"}>
            <div className={"row"}>
              {renderCards()}
            </div>
          </div>
          <div className={"container"}>
            <LoadMore addCardToArrayCallback={addCardToArrayCallback}/>
          </div>
        </div>
      </AppProvider>
  );
}