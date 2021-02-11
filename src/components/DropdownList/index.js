//import packages from node modules
import React,{useState,useEffect,useCallback,useRef} from "react";
import PropTypes from "prop-types";

export default function DropdownList(props) {
  //define variables
  const {value,list,callback,label} = props;
  const [open,setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const prevOpen = useRef(null);

  //define callback functions

  const onToggle = () =>{
    setOpen(!open);
  };

  const clickAwayCallback = useCallback((e)=>{
    if(e.target !== dropdownRef.current && (dropdownRef.current && !dropdownRef.current.contains(e.target))){
      setOpen(false);
    }
  },[dropdownRef]);

  const onOpenDropdownCallback = useCallback(()=>{
    if(open && !prevOpen.current){
      document.addEventListener("click",clickAwayCallback);
      document.addEventListener("touch",clickAwayCallback);
    }
  },[prevOpen,open,clickAwayCallback]);

  const onCloseDropdownCallback = useCallback(()=>{
    if(!open && prevOpen.current){
      document.removeEventListener("click",clickAwayCallback);
      document.removeEventListener("touch",clickAwayCallback);
    }
  },[prevOpen,open,clickAwayCallback]);

  useEffect(()=>{
    if(open !==prevOpen.current) {
      onOpenDropdownCallback();
      onCloseDropdownCallback();
      prevOpen.current = open;
    }
  },[onOpenDropdownCallback,onCloseDropdownCallback,open,prevOpen]);

  //render

  const renderList = () => {
    if(list && list.length){
      return list.map((item,index)=><div key={index} className="dropdown-item" onClick={()=>{
        callback(item.value);
        setOpen(false);
      }}>{item.label}</div>)
    }
  }

  return(
      <div className={`${open? ' show ':''}dropdown m-1`} ref={dropdownRef}>
        <button onClick={onToggle} className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded={open}>
          {label} <strong>{value}</strong>
        </button>
        <div className={`${open? ' show ':''}dropdown-menu`} aria-labelledby="dropdownMenuButton">
          {renderList()}
        </div>
      </div>
  )
};

DropdownList.propTypes = {
  initial: PropTypes.any,
  list: PropTypes.array,
  callback: PropTypes.func,
  label: PropTypes.string
};