import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProfilePosts, retrieveAllPosts } from '../services';
import { updateProfilePosts, updateGeneralPosts } from '../actions';

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

  useEffect(() => {
    optionChoosed.service().then(posts => {
      dispatch(optionChoosed.actionCreator(posts));
    });
  }, []);

  return { postsList };
};
