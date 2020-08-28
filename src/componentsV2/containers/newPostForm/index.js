import React from 'react';
import { useDispatch } from 'react-redux';
import './index.scss';
import Button from '../../UI/button';
import { setPostForm } from '../../../actions';
import { useStateForm } from '../../../hooks';
import { useSavePost } from './useSavePost';

/*
  type parameter:
  is used because this form component
  could be used for creating a new post or updating an existing one
*/

/*
  postData parameter:
  is used when editing, to know the information from the post to update
*/

const NewPostForm = ({ type, postData = { id: '', content: '' } }) => {
  // this hook controls the form data
  const { formState, onChange, resetForm } = useStateForm({
    content: postData.content,
  });

  // close form from inside
  const dispatch = useDispatch();
  const handleCloseBtn = () => {
    dispatch(setPostForm(false));
  };

  // hook for save post (new or updated)
  const { savePost } = useSavePost(
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
