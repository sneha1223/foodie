import React from 'react'
import './Booking.css'

function Booking() {
  return (
    <div className='booking-div'>
    <div className='bookingDiv'>
        <p className='booking'>Book a table</p>
        <h1 className='tableNow'>do you want to have a<br />good evening ? book a table now!</h1>

        <form className='formDiv'>
        <select className='form'>
          <label>  </label>
         <input>
         
         </input>
          </select>
        </form>

        <img className='pic1' src='https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
        <img className='pic2' src='https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
        <img className='pic3' src='https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
        <img className='pic4' src='https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
        <img className='pic5' src='https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
       
    </div>
   
    </div>
  )
}

export default Booking