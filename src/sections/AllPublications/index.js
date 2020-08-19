import React from 'react';
import PostInterface from '../../componentsV2/containers/PostInterface';
import { useGetPosts } from '../../hooks';

const AllPublications = () => {
  const { postsList } = useGetPosts('all');

  return (
    <>
      <PostInterface postsInfo={postsList} />
    </>
  );
};

export default AllPublications;
