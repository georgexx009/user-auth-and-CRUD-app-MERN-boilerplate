import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';

import { PostFormBtn } from './PostFormBtn';

const Navbar = () => {
  // manage sidenav width
  const [sidenavWidth, setSidenavWidth] = useState();
  const showSidebar = () => {
    setSidenavWidth({ width: '250px' });
  };
  const hideSidebar = () => {
    setSidenavWidth({ width: '0px' });
  };

  // for display username on navbar
  const username = useSelector(state => state.userInfo.username);

  // tracking if we are in post section to display btn to show post form
  // when the component appears, it dispatch this bool on redux store
  const postSectionStatus = useSelector(
    state => state.posts.postSectionVisible
  );

  return (
    <div id="navbar">
      <span className="hamburguer-btn" onClick={showSidebar}>
        &#9776;
      </span>

      <Link to="/user-profile">
        <span className="username-mobile">{username}</span>
      </Link>

      {postSectionStatus && username !== 'not logged' && <PostFormBtn />}

      <div style={sidenavWidth} className="sidenav" onClick={hideSidebar}>
        <a className="close-btn" onClick={hideSidebar}>
          &times;
        </a>

        {username === 'not logged' ? (
          <>
            <Link to="/registration">Register</Link>
            <Link to="/login">Log in</Link>
          </>
        ) : (
          <>
            <Link to="/user-profile">
              <span className="span-username-desktop">{username}</span>
            </Link>

            <Link to="/MyPublications">
              <i className="fas fa-wrench"></i>My Posts
            </Link>
          </>
        )}

        <Link to="/allPublications">
          <i className="fas fa-wrench"></i>All Posts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
