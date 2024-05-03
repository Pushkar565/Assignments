// src/store/middlewares/loggerMiddleware.js
const loggerMiddleware = store => next => action => {
  console.log('Action Type:', action.type);
  return next(action);
};

export default loggerMiddleware;