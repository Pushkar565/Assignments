// src/store/middlewares/payloadLoggerMiddleware.js
const payloadLoggerMiddleware = store => next => action => {
  console.log('Action Payload:', action.payload);
  return next(action);
};

export default payloadLoggerMiddleware;