// src/store/actions/coffeeActions.js
import axios from 'axios';

export const fetchCoffee = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee');
    dispatch({ type: 'FETCH_COFFEE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_COFFEE_FAILURE', error: error.message });
  }
};
