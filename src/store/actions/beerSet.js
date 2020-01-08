import * as actionTypes from "./actionTypes";

export const selectBeer = name => {
  return { type: actionTypes.SELECT_BEER, item: name };
};

export const selectTsumami = name => {
  return { type: actionTypes.SELECT_TSUMAMI, item: name };
};

export const addBeer = name => {
  return { type: actionTypes.ADD_BEER, beerName: name };
};

export const removeBeer = name => {
  return { type: actionTypes.REMOVE_BEER, beerName: name };
};

export const beerStart = name => {
  return { type: actionTypes.BEER_START, payload: name };
};

export const beerFail = err => {
  return { type: actionTypes.BEER_FAIL, payload: err };
};

export const beerSuccess = res => {
  return { type: actionTypes.BEER_SUCCESS, payload: res };
};

export const beerSubmit = ({ payload }) => {
  const items = payload.items;
  const uid = payload.uid;
  return (dispatch, getState, getFirebase) => {
    dispatch(beerStart());
    getFirebase()
      .firestore()
      .collection("orders")
      .doc()
      .set({
        uid,
        items,
        ref: getFirebase()
          .firestore()
          .collection("users")
          .doc(uid),
      })
      .then(res => dispatch(beerSuccess(res)))
      .catch(err => dispatch(beerFail(err)));
  };
};
