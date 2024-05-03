// src/store/index.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './red';
import loggerMiddleware from './middlewares/loggerMiddleware';
import payloadLoggerMiddleware from './middlewares/payloadLoggerMiddleware';

const middlewares = [loggerMiddleware, payloadLoggerMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;