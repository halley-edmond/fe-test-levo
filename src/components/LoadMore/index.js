//import packages from node modules
import React,{useState,useEffect,useCallback,useRef} from "react";
import PropTypes from "prop-types";
import axios from "axios";

//import shared component
import Loading from "../Loading";

export default function LoadMore(props){
  //define variables
  const {addCardToArrayCallback} = props;
  const [response,setResponse] =  useState({});
  const prevResponseStatus =  useRef(null);

  //define callback functions
  const onLoadMoreSuccessCallback = useCallback(()=>{
    if(prevResponseStatus.current !== response.status){
      if( response.status==="success" && response.data){
        const {title,body} = response.data;
        const newItem =  {
          "date": "30 Sep, 2018",
          "heading": title,
          "description":body,
          "link": "https://www.levo.com.au/blog/robotic-process-automation/"
        };
        addCardToArrayCallback(newItem);
      }
      prevResponseStatus.current = response.status;
    }
  },[addCardToArrayCallback,prevResponseStatus,response]);
  const buttonOnClick = e => {
    e.preventDefault();
    const randomNumber = ~~(Math.random() * 10) + 1;
    setResponse({
      ...response,
      status: "loading"
    });
    axios.get(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`).then(response => {
      setResponse({
        ...response,
        status: "success",
        data: response.data,
        error: null
      });
    }, error => {
      setResponse({
        ...response,
        status: "error",
        error,
        data: null
      });
    });
  };

  useEffect(()=>{
    onLoadMoreSuccessCallback();
  },[onLoadMoreSuccessCallback]);

  //render

  if (response.status === 'loading') {
    return (<Loading />);
  }

  return (
      <button onClick={buttonOnClick} className={"d-block mx-auto btn btn-sm btn-outline-danger"}>Read More</button>
  );

};

PropTypes.propTypes = {
  addCardToArrayCallback: PropTypes.func
};

