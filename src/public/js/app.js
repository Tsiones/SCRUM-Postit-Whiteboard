import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import PostItContainer from './components/new-post-it-container';

ReactDOM.render((
  <Provider store={store}>
    <PostItContainer />
  </Provider>),
  document.querySelector('#application'));
