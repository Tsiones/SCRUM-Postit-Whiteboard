import { combineReducers, applyMiddleware } from 'redux';

import postit from './post-it';


const reducer = combineReducers({
  postit
});

export default reducer;
