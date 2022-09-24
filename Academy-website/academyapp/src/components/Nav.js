import React from 'react'

/* Images */ 
import logo from '../assets/images/logo name.svg'

function Nav() {
  return (
    <div>
      <nav className=" sticky-top bg-white pt-3 pb-3">
       <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
       <a className="py-2" href="#">
        <img src={logo} className='logo' alt='Academy logo'></img>
       </a>
      <ul className='nav-links d-flex flex-md-row  align-items-center gap-5 ff-tajawal fs-16 mt-3 ms-5'>
        <li>
          <a className="py-2 d-none d-md-inline-block " href="#main">الرئيسية</a>
        </li>
         <li>
           <a className="py-2 d-none d-md-inline-block" href="#courses">البرامج
           </a>
          </li>
           <li>
             <a className="py-2 d-none d-md-inline-block " href="#">منصاتنا 
                         </a></li>
                    </ul>
                    <button class="btn my-2 my-sm-0 p-2 ff-tajawal fs-16 me-5 color-white move-left">تسجيل الدخول</button>
             <i class="fa-solid fa-magnifying-glass color-white"></i>

       </div>
      </nav>

    </div>
  
  )
}

export default Nav