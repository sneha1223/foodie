import React from 'react'
import './Whitediv.css'
function Whitediv() {
  return (
    <div className='whiteDiv'>
    <form>
      <input 
      type="text" 
      className="user_name" 
      placeholder='Name'/>
      <hr className='input-name-line' />
     
      <input 
      type="text" 
      className="user_email" 
      placeholder='Email Address'/>
      <hr className='input-email-line' />
      
      <input 
      type="text" 
      className="message" 
      placeholder='How can we help you? Feel free to get in touch'/>
      <hr className='input-type-line' />
    
      <input type='submit' value='send'> Get in touch</input>
  </form>
  </div>
  

  )
}

export default Whitediv