// src/store/reducers.js
import {
  FETCH_MATCHES_START,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_ERROR,
} from '.store/action'; // Update the import path to './action'

const initialState = {
  isLoading: false,
  isError: false,
  matches: [],
};

const footballMatchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MATCHES_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_MATCHES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        matches: action.payload,
      };
    case FETCH_MATCHES_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        matches: [],
      };
    default:
      return state;
  }
};

export default footballMatchesReducer;
