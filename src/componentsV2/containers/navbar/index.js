import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';

import { setUserData, showPostForm } from '../../../actions';

const Navbar = () => {
  const username = useSelector(state => state.userInfo.userName);
  const statusPostForm = useSelector(state => state.posts.showPostForm);
  const postSectionStatus = useSelector(
    state => state.posts.postSectionVisible
  );
  const dispatch = useDispatch();
  const [sidenavWidth, setSidenavWidth] = useState();

  //componentDidMount
  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    userInfo && dispatch(setUserData(JSON.parse(userInfo)));
  }, []);

  return (
    <div className="navbar">
      <span
        className="hamburguer-btn"
        style={{ fontSize: '30px', cursor: 'pointer' }}
        onClick={() => setSidenavWidth({ width: '250px' })}
      >
        &#9776;
      </span>

      <Link to="/user-profile">
        <span className="span-title-mobile">{username}</span>
      </Link>
      {postSectionStatus && username !== 'not logged' && (
        <a
          className="show-post-form-btn"
          id="show-post-form-btn"
          onClick={() => dispatch(showPostForm(!statusPostForm))}
        >
          <i className="fa fa-plus"></i>
        </a>
      )}

      <div
        style={sidenavWidth}
        id="mySidenav"
        className="sidenav"
        onClick={() => setSidenavWidth({ width: '0px' })}
      >
        <a
          className="closebtn"
          onClick={() => setSidenavWidth({ width: '0px' })}
        >
          &times;
        </a>

        {username === 'not logged' ? (
          <span className="span-title-desktop" style={{ padding: '15px 30px' }}>
            {username}
          </span>
        ) : (
          <Link to="/user-profile">
            <span className="span-title-desktop">{username}</span>
          </Link>
        )}

        <Link to="/cards">
          <i className="fas fa-code"></i> Naruto Cards
        </Link>

        <Link to="/MyNotes">Notes</Link>

        {username === 'not logged' && <Link to="/registration">Register</Link>}
        {username === 'not logged' && <Link to="/login">Log in</Link>}

        {username !== 'not logged' && (
          <Link to="/MyPublications">
            <i className="fas fa-wrench"></i>My Posts
          </Link>
        )}

        <Link to="/allPublications">
          <i className="fas fa-wrench"></i>All Posts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
