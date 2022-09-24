import React from 'react'

// images
import card1 from '../assets/images/card1.svg'

function Card(props) {
  return (
    <div className='about-us-card d-flex row  text-center me-2 ms-2'>
      <div className='d-flex justify-content-center'>
      <img src={props.cardimg} className='card-img mt-4'></img>
      </div>
      <div className='about-us-text text-center color-secondary ff-tajawal '>
        <h4 className='fs-24'>{props.imgTitle}</h4>
        <p className='fs-22 mt-4'>{props.number}</p>
        <p className='fs-22'>{props.cardText}</p>
      </div>
    </div>
  )
}
export default Card