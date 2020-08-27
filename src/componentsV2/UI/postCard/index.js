import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';

import IconBtn from '../iconBtn';

import { useDeletePost } from './useDeletePost';
import { useEditPost } from './useEditPost';

const PostCard = ({ username, content, id }) => {
  const loggedUsername = useSelector(state => state.userInfo.username);

  const { handleDeletePost } = useDeletePost(id);
  const { handleEditPost } = useEditPost(id, content);

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
            <IconBtn handleClick={handleEditPost}>
              <i className="far fa-edit"></i>
            </IconBtn>
            <IconBtn handleClick={handleDeletePost}>
              <i className="fas fa-trash"></i>
            </IconBtn>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
