import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';

import Button from '../button';
import IconBtn from '../iconBtn';

import { deletePost } from '../../../services';
import { removePost } from '../../../actions';

const PostCard = ({ username, content, id }) => {
  const dispatch = useDispatch();
  const loggedUsername = useSelector(state => state.userInfo.username);

  const handleDeleteClick = () => {
    deletePost(id).then(status => {
      if (status === 200 || status == 204) {
        dispatch(removePost(id));
      }
    });
  };

  return (
    <div className="pub-card">
      <div className="post-container">
        <div className="avatar"></div>
        <div className="post-content">
          <h3 className="username">
            <b>{username}</b>
          </h3>
          <p className="content">{content}</p>
        </div>
        {loggedUsername === username && (
          <div className="grp-options">
            <IconBtn>
              <i
                className="far fa-edit"
                style={{ color: 'grey', cursor: 'not-allowed' }}
              ></i>
            </IconBtn>
            <IconBtn handleClick={handleDeleteClick}>
              <i className="fas fa-trash"></i>
            </IconBtn>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
