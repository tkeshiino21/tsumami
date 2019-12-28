import * as actionTypes from "./actionTypes";

export const selectBeer = name => {
  return { type: actionTypes.SELECT_BEER, item: name };
};

export const addBeerSet = name => {
  return { type: actionTypes.ADD_BEER, item: name };
};

export const removeBeerSet = name => {
  return { type: actionTypes.ADD_BEER, item: name };
};
