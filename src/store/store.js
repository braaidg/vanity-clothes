import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = createStore(rootReducer, composedEnhancers);

export default store;
