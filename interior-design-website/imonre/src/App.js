// import logo from './logo.svg';

import './App.css';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Cards from './components/Cards';

// import images
import img6 from './assest/img/img-6.jpg'
import chair from './assest/img/chair.png'
import cabinet from './assest/img/cabinet.png'
import sofa from './assest/img/sofa.png'
import armchair from './assest/img/armchair.png'


function App() {
  return (
    <div className="App">

      <div className="hero">
        <Nav></Nav>
        <div className='content'>
          <h3>Awsome Design Best Furniture 
            <br/>For Your Home</h3>
          <p>Browse, choose and order, very simple</p>
          <a href='#' className='btn'>Shop Now</a>
          </div>
      </div>
      
      <section className='about'>
        <div className='main'>
          <div>
          <img src={img6} className='about-img'></img>
          </div>
          <div className='about-text'>
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
<a href='#' className='more-btn btn mt-4'>Read More</a>
          </div> 
        </div>
      </section>

      <section className=" d-flex shop gap-5 justify-content-center">
      <Cards img={armchair} title='Chair' p='$3770.00'></Cards>
      <Cards img={sofa} title='Sofa' p='$599.00'></Cards>
      <Cards img={cabinet} title='Cabinet' p='$480.00'></Cards>
      <Cards img={chair} title='Arm-chair' p='$630.00'></Cards>
      </section>
      <Footer></Footer>  
    </div>
  );
}

export default App;
