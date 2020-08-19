import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import Button from '../../UI/button';
import { savePost, updateUserPosts } from '../../../services';
import { setUserPubs, setNewPub, addNewPost } from '../../../actions';
import { useStateForm } from '../../../hooks';

const NewPostForm = ({ handleCloseBtn }) => {
  const [pubData, setPubData] = useState('');
  const { formState, onChange, resetForm } = useStateForm({ post: '' });
  const userInfo = useSelector(state => state.userInfo);
  const dispatch = useDispatch();

  const handleSaveBtn = async () => {
    const newPost = {
      username: userInfo.username,
      content: formState.post,
    };
    const docSaved = await savePost(newPost);
    console.log(docSaved);
    let newPubs = {
      posts: [...userInfo.posts, docSaved._id],
    };
    const { status, data } = await updateUserPosts(newPubs);
    console.log(data);
    if (status === 200) {
      //SEND PUBS FOR USER AND THE ADDED POST
      dispatch(setUserPubs(data.publications));
      dispatch(addNewPost(docSaved));
    }

    setPubData('');
    handleCloseBtn();
  };

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
          handleClick={handleSaveBtn}
          disabled={formState.post.trim() === ''}
        />
      </div>
    </div>
  );
};

export default NewPostForm;
