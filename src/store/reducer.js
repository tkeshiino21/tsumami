import * as actionTypes from "./action";

const initialState = {
  beers: {
    glass: 0,
    regularBeerMug: 0,
    tallBeerMug: 0,
    shortCan: 0,
    regularCan: 0,
    longCan: 0,
  },
  totalAlcohol: 0,
};

const BEERS_VOLUME = {
  glass: 285,
  regularBeerMug: 435,
  tallBeerMug: 700,
  shortCan: 250,
  regularCan: 350,
  longCan: 500,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BEER:
      console.log(action);
      return {
        ...state,
        beers: {
          ...state.beers,
          [action.beerName]: state.beers[action.beerName] + 1,
        },
        totalAlcohol: state.totalAlcohol + BEERS_VOLUME[action.beerName],
      };
    case actionTypes.REMOVE_BEER:
      console.log(action);
      return {
        ...state,
        beers: {
          ...state.beers,
          [action.beerName]: state.beers[action.beerName] - 1,
        },
        totalAlcohol: state.totalAlcohol - BEERS_VOLUME[action.beerName],
      };
    default:
      return state;
  }
};

export default reducer;
