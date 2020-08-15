import { combineReducers } from 'redux';

import { users } from './user.reducer';
import { publicationsReducer } from './publications.reducer';
import { cardInfoReducer } from './cardInfo.reducer';
import { modalReducer } from './modal.reducer';
import { snackbarReducer } from './snackbar.reducer';
import { postsReducer } from './posts.reducer';

export const rootReducer = combineReducers({
  cardInfo: cardInfoReducer,
  pubsInfo: publicationsReducer,
  modalData: modalReducer,
  userInfo: users,
  snackbarData: snackbarReducer,
  posts: postsReducer,
});
