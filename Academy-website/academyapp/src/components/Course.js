import React from 'react'



function Course(props) {
  return (
    <div className='card'>
      <div className='course-wrap-header'>
        <img src={props.img} className='card-img-top'></img>
        <div className='course-status ff-tajawal fs-12 p-1 bg-danger color-white'
        > {props.status ? props.status: 'مغلق'}
        </div>
      </div>
      <div className='course-body flex-auto container d-flex row me-2 ms-2 ff-tajawal pb-4'>
        <h4 className='fs-24 ff-tajawal mt-4 '>{props.title}</h4>
        <div className='d-flex gap-2 align-items-baseline color-gray'>
        <i className="fa-solid fs-14 fa-clipboard-user"></i>
          <span className='course-location mt-2 fs-12'>{props.text}</span>
        </div>
        <p className='fs-14 color-gray1 mt-4 mb-4'>{props.desc}</p>
        <button class="btn apply-btn my-2 mb-5 my-sm-0 p-2 ff-tajawal fs-16 color-white">قدّم الآن</button>
      </div>
    </div>
  )
}
export default Course