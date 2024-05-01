// src/store/actions.js

export const FETCH_MATCHES_START = 'FETCH_MATCHES_START';
export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const FETCH_MATCHES_ERROR = 'FETCH_MATCHES_ERROR';

export const fetchMatchesStart = () => ({
  type: FETCH_MATCHES_START,
});

export const fetchMatchesSuccess = (matches) => ({
  type: FETCH_MATCHES_SUCCESS,
  payload: matches,
});

export const fetchMatchesError = (error) => ({
  type: FETCH_MATCHES_ERROR,
  payload: error,
});

export const fetchMatches = (page) => async (dispatch) => {
  dispatch(fetchMatchesStart());
  try {
    const response = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${page}`);
    const data = await response.json();
    dispatch(fetchMatchesSuccess(data.data));
  } catch (error) {
    dispatch(fetchMatchesError(error.message));
  }
};