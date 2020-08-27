import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import Button from '../../UI/button';
import { showPostForm, setPostForm } from '../../../actions';
import { useStateForm } from '../../../hooks';
import { useCreatePost } from './useCreatePost';

const NewPostForm = ({ type, postData = { id: '', content: '' } }) => {
  const { formState, onChange, resetForm } = useStateForm({
    content: postData.content,
  });

  // close form from inside form
  const dispatch = useDispatch();
  const handleCloseBtn = () => {
    dispatch(setPostForm(false));
  };

  // hook for save post (new or updated)
  const { savePost } = useCreatePost(
    type,
    formState,
    () => {
      resetForm();
      handleCloseBtn();
    },
    () => {},
    postData.id
  );

  return (
    <div className="new-pub-form">
      <textarea
        placeholder="post ..."
        name="content"
        onChange={onChange}
        value={formState.content}
      />
      <div className="footer-btns">
        <Button
          lbl="Close"
          handleClick={handleCloseBtn}
          style={{ backgroundColor: 'grey' }}
        />
        <Button
          lbl="Save"
          handleClick={savePost}
          disabled={formState.content.trim() === ''}
        />
      </div>
    </div>
  );
};

export default NewPostForm;
