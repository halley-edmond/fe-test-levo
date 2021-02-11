//import packages from node modules
import React,{createContext,useReducer} from "react";
import PropTypes from "prop-types";

import reducer,{initialState,UPDATE_THEME,RESET_THEME} from "./reducer";

export const AppContext = createContext();

export default function AppProvider(props) {
  const {children} = props;
  const [state,dispatch] = useReducer(reducer,initialState);

  const actions = {
    updateTheme: config =>{
      dispatch({
        type: UPDATE_THEME,
        config
      });
    },
    resetTheme: () => {
      dispatch({
        type: RESET_THEME
      });
    }
  };

  return(
      <AppContext.Provider value={{
        state,
        actions
      }}>
        {children}
      </AppContext.Provider>
  );
}

AppProvider.propTypes= {
  children: PropTypes.any
};
