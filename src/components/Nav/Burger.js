import React, { useState } from 'react';
import RightNav from './RightNav';


const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <div className={open ? 'burger is-active' : 'burger'}  onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
      <RightNav open={open}/>
    </>
  )
}

export default Burger
