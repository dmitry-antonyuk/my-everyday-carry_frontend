import React from 'react';

const RightNav = ({ open }) => {
  return (
    <ul className={ open ? 'right-nav is-active' : 'right-nav '}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </ul>
  )
}

export default RightNav
