import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveAllPosts } from '../../services';
import { updateGeneralPosts } from '../../actions';
import PostInterface from '../../componentsV2/containers/postInterface';

const AllPublications = () => {
  const postsInfo = useSelector((state) => state.posts.generalPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveAllPosts().then((data) => {
      dispatch(updateGeneralPosts(data));
    });
  }, []);

  return (
    <>
      <PostInterface postsInfo={postsInfo} />
    </>
  );
};

export default AllPublications;
