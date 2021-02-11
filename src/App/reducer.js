//define action constant
export const UPDATE_THEME = "app/UPDATE_THEME";
export const RESET_THEME = "app/RESET_THEME";

//definte initial state
export const initialState = {
  fontFamily: undefined,
  heading:{
    fontColor: undefined,
    fontSize: undefined
  },
  description:{
    fontColor: undefined,
    fontSize: undefined
  },
  card:{
    primary: undefined,
    secondary: undefined,
    tertiary: undefined
  }
};

//reducer
export default function reducer(state,action) {
  switch (action.type) {
    case UPDATE_THEME:
      return {
        ...state,
        ...action.config
      };
    case RESET_THEME:
      return initialState;
    default:
      return state;
  }
};