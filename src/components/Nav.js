import { React, useEffect, useState } from "react";
import './Nav.css'

function Nav() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100){
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener('scroll');
    // };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__image'>
      <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
          alt="Netflix logo"
        />
      </div>
      <div className='nav__left'>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
      </div>
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
