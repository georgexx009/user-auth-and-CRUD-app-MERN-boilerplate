import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProfilePosts, retrieveAllPosts } from '../services';
import {
  updateProfilePosts,
  updateGeneralPosts,
  postSectionVisible,
} from '../actions';

/*
  this hook retrieve the posts from the server
  update them in the redux store
  and update a booll on the redux store for let know other components that we are in posts section
*/

const options = {
  user: {
    stateName: 'profilePosts',
    service: retrieveProfilePosts,
    actionCreator: updateProfilePosts,
  },
  all: {
    stateName: 'generalPosts',
    service: retrieveAllPosts,
    actionCreator: updateGeneralPosts,
  },
};

export const useGetPosts = option => {
  const optionChoosed = options[option] || options.all;

  const postsList = useSelector(state => state.posts[optionChoosed.stateName]);
  const dispatch = useDispatch();

  // update redux store bool, for let know other components that we are in posts section
  useEffect(() => {
    optionChoosed.service().then(posts => {
      dispatch(optionChoosed.actionCreator(posts));
    });
    dispatch(postSectionVisible(true));
    return () => dispatch(postSectionVisible(false));
  }, []);

  return { postsList };
};
