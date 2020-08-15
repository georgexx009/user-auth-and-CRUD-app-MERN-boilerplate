import React from 'react';
import './index.scss';

const PubCard = ({ username, content }) => {
  return (
    <div className="pub-card">
      {/* <img
        src="../../../../assests/Uchiha_Sasuke.jpg"
        alt="Avatar"
        className="avatar"
      /> */}
      <div className="avatar"></div>
      <div className="pub-card-body">
        <p className="username">{username}</p>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default PubCard;
