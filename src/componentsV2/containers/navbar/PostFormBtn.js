import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showPostForm, setPostForm } from '../../../actions';

export const PostFormBtn = () => {
  const dispatch = useDispatch();
  // status for display the modal - post form to submit new post
  const statusPostForm = useSelector(state => state.posts.postFormData.status);

  return (
    <a
      className="show-post-form-btn"
      onClick={() => dispatch(setPostForm(!statusPostForm))}
    >
      <i className="fa fa-plus"></i>
    </a>
  );
};
