import React from 'react';
import { useDispatch } from 'react-redux';
import './index.scss';
import Button from '../../UI/button';
import { showPostForm } from '../../../actions';
import { useStateForm } from '../../../hooks';
import { useCreatePost } from './useCreatePost';

const NewPostForm = () => {
  const { formState, onChange, resetForm } = useStateForm({ post: '' });

  // close form from inside form
  const dispatch = useDispatch();
  const handleCloseBtn = () => {
    dispatch(showPostForm(false));
  };

  // hook for create post
  const { createPost } = useCreatePost(formState, () => {
    resetForm();
    handleCloseBtn();
  });

  return (
    <div className="new-pub-form">
      <textarea placeholder="post ..." name="post" onChange={onChange} />
      <div className="footer-btns">
        <Button
          lbl="Close"
          handleClick={handleCloseBtn}
          style={{ backgroundColor: 'grey' }}
        />
        <Button
          lbl="Save"
          handleClick={createPost}
          disabled={formState.post.trim() === ''}
        />
      </div>
    </div>
  );
};

export default NewPostForm;
