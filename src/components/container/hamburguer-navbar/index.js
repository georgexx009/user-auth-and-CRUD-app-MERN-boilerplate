import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';

import { setUserData } from '../../../actions';

const closeNav = (e, setMySidenavStyle) => {
  e.preventDefault();
  setMySidenavStyle({
    width: '0px',
  });
};

const openNav = (e, setMySidenavStyle) => {
  e.preventDefault();
  setMySidenavStyle({
    width: '250px',
  });
};

const HamburguerNavbar = () => {
  const [mySidenavStyle, setMySidenavStyle] = useState();
  const usernameNavbar = useSelector(state => state.userInfo.userName);
  const dispatch = useDispatch();

  //componentDidMount
  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    console.log(userInfo);
    userInfo && dispatch(setUserData(JSON.parse(userInfo)));
  }, []);

  return (
    <div className="hamburguer-navbar">
      <div style={mySidenavStyle} id="mySidenav" className="sidenav">
        <a
          href="#"
          className="closebtn"
          onClick={e => closeNav(e, setMySidenavStyle)}
        >
          &times;
        </a>

        {usernameNavbar === 'not logged' ? (
          <span className="span-title-desktop" style={{ padding: '15px 30px' }}>
            {usernameNavbar}
          </span>
        ) : (
          <Link to="/user-profile">
            <span className="span-title-desktop">{usernameNavbar}</span>
          </Link>
        )}

        <Link to="/">
          <i className="fas fa-id-card"></i>
        </Link>

        <Link to="/cards">
          <i className="fas fa-code"></i> Naruto Cards
        </Link>

        <Link to="/testing">Testing</Link>

        {usernameNavbar === 'not logged' && (
          <Link to="/register">Register</Link>
        )}
        {usernameNavbar === 'not logged' && <Link to="/login">Log in</Link>}

        {usernameNavbar !== 'not logged' && (
          <Link to="/MyPublications">
            <i className="fas fa-wrench"></i>My Posts
          </Link>
        )}

        <Link to="/allPublications">
          <i className="fas fa-wrench"></i>All Posts
        </Link>
      </div>

      <span
        className="hamburguer-btn"
        style={{ fontSize: '30px', cursor: 'pointer' }}
        onClick={e => openNav(e, setMySidenavStyle)}
      >
        &#9776;
      </span>
      <Link to="/user-profile">
        <span className="span-title-mobile">{usernameNavbar}</span>
      </Link>

      <a className="show-post-form-btn">
        <i className="fa fa-plus"></i>
      </a>
    </div>
  );
};

export default HamburguerNavbar;
