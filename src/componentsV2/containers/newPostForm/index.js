import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import Button from '../../UI/button';
import { savePub, updateUserPubs } from '../../../services';
import { setUserPubs, setNewPub, addNewPost } from '../../../actions';

const NewPostForm = ({ handleCloseBtn }) => {
  const [pubData, setPubData] = useState('');
  const userInfo = useSelector(state => state.userInfo);
  const dispatch = useDispatch();

  const handleChange = e => {
    setPubData(e.target.value);
  };

  const handleSaveBtn = async () => {
    const newPub = {
      username: userInfo.username,
      content: pubData,
    };
    const docSaved = await savePub(newPub);

    let newPubs = {
      publications: [...userInfo.publications, docSaved._id],
    };
    const { status, data } = await updateUserPubs(newPubs);
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
      <textarea placeholder="publication ..." onChange={handleChange} />
      <div className="footer-btns">
        <Button
          lbl="Close"
          handleClick={handleCloseBtn}
          style={{ backgroundColor: 'grey' }}
        />
        <Button
          lbl="Save"
          handleClick={handleSaveBtn}
          disabled={pubData.trim() === ''}
        />
      </div>
    </div>
  );
};

export default NewPostForm;
