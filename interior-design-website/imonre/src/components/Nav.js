import React from 'react'

// images 
import logo from '../assest/img/Imonre-logo.svg';




function Nav() {
  return (
    <div>
      <nav className='pt-5 pe-3 ps-4'>
        <div>
          <img src={logo} className="logo"></img>
        </div>

<ul>
  <li><a href='#'>HOME</a></li>
  <li><a href='#'>ABOUT US</a></li>
  <li><a href='#'>SHOP</a></li>
  <li><a href='#'>CONTACT US</a></li>
</ul>
   </nav>
    </div>
  )
}

export default Nav