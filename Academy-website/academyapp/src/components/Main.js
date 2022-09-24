import React from 'react'
import Zoom from 'react-reveal/Zoom';

/* Images */ 
import homePhoto from '../assets/images/Home-photo.svg'

function Main() {
  return (
    <div>
      <section id='main' className='container d-flex justify-content-between main align-items-center'>
        <div>
        <div className='main-text'>
          <h1 className='ff-almarai fs-42 mb-4'>تمكين 100 ألف مبرمج 
بحلول عام 2030</h1>
<p className='ff-tajawal mt-3 mb-5 fs-16 color-gray2'>تقدم أكاديمية طويق عدد من المعسكرات البرمجية والدورات المكثفة والقصيرة بالإضافة الى     إطلاقها 
<strong className='me-1 ms-1'><a href='https://satr.codes/'>منصة سطر</a> </strong>
 لتكون أول منصة عربية متخصصة في مجالات التقنية الحديثة باللغة العربية.</p>
</div>
<div className='join'>
<h4 className='ff-tajawal fs-22 mt-5 mb-4'>ساهم في بناء مستقبل أفضل من خلال بناء مهاراتك</h4>
<button class="btn btn-main mt-5 my-sm-0 p-2 ff-tajawal fs-24 color-white p-4 d-flex justify-content-around align-items-center "> إنشــاء حســاب 
<i className="fa-solid fa-arrow-left fs-24">
  </i></button>
</div>
        </div>
        <img src={homePhoto} className='main-photo'></img>

      </section>
    </div>
  )
}
export default Main