import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';

import FloatingBtn from '../../UI/floatingBtn/index2';
import NewPostForm from '../NewPostForm';
import AnimateContainer from '../AnimateContainer';
import PostList from '../postsList';

import { showPostForm } from '../../../actions';

const PostInterface = ({ postsInfo }) => {
  const dispatch = useDispatch();
  // status for display the modal - post form to submit new post
  const statusPostForm = useSelector(state => state.posts.showPostForm);
  const username = useSelector(state => state.userInfo.username);

  const closeBtnForm = () => {
    dispatch(showPostForm(false));
  };

  return (
    <>
      <div className="posts-interface">
        <AnimateContainer mounted={statusPostForm}>
          <NewPostForm handleCloseBtn={closeBtnForm} />
        </AnimateContainer>
        {postsInfo.length === 0 ? (
          <p>No posts available</p>
        ) : (
          <PostList postsToDisplay={postsInfo} />
        )}
      </div>
      {username !== 'not logged' && (
        <FloatingBtn
          onClick={() => {
            dispatch(showPostForm(!statusPostForm));
          }}
        />
      )}
    </>
  );
};

export default PostInterface;
