import * as actionTypes from "./actionTypes";

export const selectBeer = name => {
  return { type: actionTypes.SELECT_BEER, item: name };
};

export const addBeer = name => {
  return { type: actionTypes.ADD_BEER, beerName: name };
};

export const removeBeer = name => {
  return { type: actionTypes.ADD_BEER, beerName: name };
};
