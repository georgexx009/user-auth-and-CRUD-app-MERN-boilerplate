import React from 'react';
import './index.scss';
import PostCard from '../../UI/postCard';

const PostsList = ({ postsToDisplay }) => {
  return (
    <>
      {postsToDisplay.map((pubsInfo, i) => (
        <PostCard
          key={i}
          id={pubsInfo._id}
          username={pubsInfo.username}
          content={pubsInfo.content}
        />
      ))}
    </>
  );
};

export default PostsList;
