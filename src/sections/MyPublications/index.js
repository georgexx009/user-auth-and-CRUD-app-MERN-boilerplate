import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostInterface from '../../componentsV2/containers/postInterface';
import { updateProfilePosts } from '../../actions';
import { retriveProfilePosts } from '../../services';

const MyPublications = () => {
  const postsInfo = useSelector((state) => state.posts.profilePosts);
  const dispatch = useDispatch();

  useEffect(() => {
    retriveProfilePosts().then((pubs) => {
      dispatch(updateProfilePosts(pubs));
    });
  }, []);

  return (
    <>
      <PostInterface postsInfo={postsInfo} />
    </>
  );
};

export default MyPublications;
