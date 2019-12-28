import * as actionTypes from "./actionTypes";

export const selectBeer = name => {
  return { type: actionTypes.SELECT_BEER, ingredientName: name };
};
