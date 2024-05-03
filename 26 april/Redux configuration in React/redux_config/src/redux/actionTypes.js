// src/redux/actionTypes.js
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';

// src/redux/actions/authActions.js


export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// src/redux/actions/quizActions.js


export const fetchQuizSuccess = (quizData) => ({
  type: FETCH_QUIZ_SUCCESS,
  payload: quizData,
});
