const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    // reduxでは元のstateを書き換えてはいけない
    // そこで元のstateをコピーして新しいstateを作って書き換える
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

// store
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
// subscriptionの中には今回起きた変更が全て書かれている
store.subscribe(() => {
  console.log("[subscription]", store.getState());
});

// dispatching action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
