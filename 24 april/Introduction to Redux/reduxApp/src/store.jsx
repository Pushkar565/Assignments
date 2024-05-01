// store.jsx
import  { legacy_createStore }  from 'redux';
import { themeReducer } from './reducer';

const store = legacy_createStore(themeReducer);

export default store;