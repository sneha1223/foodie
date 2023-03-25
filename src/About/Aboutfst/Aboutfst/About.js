import React from 'react'
import './About.css'

function About() {
  return (
    <div className='aboutDiv'> 
       <img className='abt-img' src='https://images.pexels.com/photos/2387624/pexels-photo-2387624.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
    <p className='about-us'>About us</p>
    <h1 className='visit'>your every visit<br />will be memorable</h1>
    <p className='visit-sub'>It is a long established fact that a reader will be distracted by the<br /> readable content of a page when looking at its layout. The point of<br /> using Lorem Ipsum is that it has a more-or-less normal distribution</p>
    <p className='info-mail'>info@example.com</p>
    <p className='fish'>fish</p> 
    <hr className='fish-line'></hr>
    <hr className='green-fish'></hr>  
    <p className='meat'>Meat</p> 
    <hr className='meat-line'></hr>
    <hr className='green-meat'></hr>  
    <p className='veg'>vegtables</p> 
    <hr className='veg-line'></hr>
    <hr className='green-veg'></hr>  
    <img className='abt-vdo' src='https://images.pexels.com/photos/2387624/pexels-photo-2387624.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
    </div>
  )
}

export default About