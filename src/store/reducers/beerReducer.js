import * as actionTypes from "../actions/actionTypes";

const initState = {
  items: [],
  isLoading: false,
  isError: false,
};

const beerReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.BEER_START:
      console.log(action);
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.BEER_FAIL:
      console.log(action);
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case actionTypes.BEER_SUCCESS:
      console.log(action);
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default beerReducer;
