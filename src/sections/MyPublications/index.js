import React from 'react';
import PostInterface from '../../componentsV2/containers/PostInterface';
import { useGetPosts } from '../../hooks';

const MyPublications = () => {
  const { postsList } = useGetPosts('user');

  return (
    <>
      <PostInterface postsInfo={postsList} />
    </>
  );
};

export default MyPublications;
