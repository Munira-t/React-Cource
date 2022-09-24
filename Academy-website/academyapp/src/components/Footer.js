import React from 'react'

import imglogo from '../assets/images/logo-white.svg'

function Footer() {
  return (
    <div>
<footer className=' d-flex justify-content-around col'>
<div  className='social mt-5'>
    <a href='https://www.linkedin.com/company/tuwaiqacademy/?originalSubdomain=sa'><i class="fa-brands fa-linkedin-in"></i></a>
    <a href='https://twitter.com/TuwaiqAcademy'><i class="fa-brands fa-twitter"></i></a>
    <a href='#'><i class="fa-brands fa-telegram"></i></a>
  </div>
<div class="col-md-4 d-flex align-items-center">
      <a href="" class="mb-3 mb-md-0 text-muted text-decoration-none lh-1">
        <img className='img-footer 'src={imglogo}></img>
      </a>
      <span className="text-muted color-gray">© 2022 Tuwaiq Academy, Inc</span></div>
  <p className='end'>&copy; 2022 by Munira</p>
</footer>


    
    </div>
  )
}

export default Footer