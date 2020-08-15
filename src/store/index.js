import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { initialState } from './initialState';
import apiMiddleware from '../redux-middleware';
import thunkMiddleware from 'redux-thunk';

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(apiMiddleware, thunkMiddleware)
);
