import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import Button from '../Button';
import { savePub, updateUserPubs } from '../../../services';
import { setUserPubs, setNewPub } from '../../../actions';

const NewPubForm = ({ handleCloseBtn }) => {
  const [pubData, setPubData] = useState('');
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPubData(e.target.value);
  };

  const handleSaveBtn = async () => {
    const newPub = {
      username: userInfo.userName,
      content: pubData,
    };
    const docSaved = await savePub(newPub);

    let newPubs = {
      publications: [...userInfo.publications, docSaved._id],
    };
    const { status, data } = await updateUserPubs(newPubs);
    if (status === 200) {
      dispatch(setUserPubs(data.publications));
      dispatch(setNewPub(newPub));
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

export default NewPubForm;
