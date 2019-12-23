const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        counter: state.counter + 10,
      };
    case "SUBTRACT":
      return {
        counter: state.counter - 10,
      };
    default:
      console.log("actions are waitting...");
  }
  return state;
};

export default reducer;
