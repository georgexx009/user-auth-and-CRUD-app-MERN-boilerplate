import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';

import FloatingBtn from '../../../componentsV2/UI/floatingBtn/index2';
import NewPostForm from '../../../componentsV2/containers/newPostForm';
import AnimateContainer from '../../../componentsV2/containers/AnimateContainer';
import PostList from '../../../componentsV2/containers/postsList';

import { showPostForm, postSectionVisible } from '../../../actions';

const PostInterface = ({ postsInfo }) => {
  const dispatch = useDispatch();
  // status for display the modal - post form to submit new post
  const statusPostForm = useSelector(state => state.posts.showPostForm);
  const username = useSelector(state => state.userInfo.userName);

  // update redux store bool, for let know other components that we are in posts section
  useEffect(() => {
    dispatch(postSectionVisible(true));
    return () => dispatch(postSectionVisible(false));
  }, []);

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
