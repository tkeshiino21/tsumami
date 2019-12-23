import * as actionTypes from "./action";

const initialState = {
  beers: [],
  totalAlcohol: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + 10,
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - 10,
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter,
        }),
      };
    case "DELETE_RESULT":
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray,
      };
    default:
      console.log("actions are waitting...");
  }
  return state;
};

export default reducer;
