import React from 'react';

import Burger from './Burger';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_logo'>
        Nav Bar
      </div>
      <Burger />
    </div>
  )
}

export default Navbar
