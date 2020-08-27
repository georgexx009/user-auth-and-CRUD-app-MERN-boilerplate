import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';

import FloatingBtn from '../../UI/floatingBtn/index2';
import NewPostForm from '../NewPostForm';
import AnimateContainer from '../AnimateContainer';
import PostList from '../PostsList';

import { showPostForm, setPostForm } from '../../../actions';

const PostInterface = ({ postsList }) => {
  const dispatch = useDispatch();

  // status for display the modal - post form to submit new post
  // its on store because could be display from btn on navbar (btn display on mobile screen)
  const postFormData = useSelector(state => state.posts.postFormData);

  // if user not log, it wont display btn to show post form
  const username = useSelector(state => state.userInfo.username);

  return (
    <>
      <div className="posts-interface">
        <AnimateContainer mounted={postFormData.status}>
          <NewPostForm
            type={postFormData.type}
            postData={postFormData.postData}
          />
        </AnimateContainer>
        {postsList.length === 0 ? (
          <p>No posts available</p>
        ) : (
          <PostList postsToDisplay={postsList} />
        )}
      </div>
      {username !== 'not logged' && (
        <FloatingBtn
          onClick={() => {
            dispatch(setPostForm(!postFormData.status));
          }}
        />
      )}
    </>
  );
};

export default PostInterface;
