import React from 'react'

// import img1 from '../assest/img/img-1.jpg';
// import img2 from '../assest/img/img-2.jpg';
// import img3 from '../assest/img/img-3.jpg';


function Cards(props) {
  return (
  <div className='mt-5'>
  <div className="card p-3 justify-content-center align-items-center">
  <img className="card-img-top p-3" src={props.img} alt="Card image cap"></img>
  <div className="card-body text-center">
    <h5 className="card-title ff-prata pb-3">{props.title}</h5>
    <p className="card-text ff-Montserrat gray-color">{props.p}</p>
    <a href="#" className="btn  bg-praimary-color ff-Montserrat"><i className="fa-solid fa-cart-shopping pe-3"></i>Add to cart</a>
    
  </div>
</div>

    </div>
  )
}

export default Cards