import React from 'react'
import './Service.css'

function Service() {
  return (
    <div className='mainDiv'>
    <div className='images'>
        <img className='fstimg' src='https://images.pexels.com/photos/1673876/pexels-photo-1673876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
        <img className='scndimg' src='https://images.pexels.com/photos/2452280/pexels-photo-2452280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
        </div>
        <div className='lines'>
        <hr className='hr-1' />
        <hr className='hr-2'/>
        <hr className='hr-3' />
        <hr className='hr-4' />
        <hr className='hr-5' />

    </div>
    <div>
        <p className='quality'>Quality Services</p>
        <h1 className='main'>Rare Collectible</h1>
        <h1 className='wine'>Wine Bottles</h1>
        <div>
        <p className='note'>Adipiscing elit, sed do eiusmod tempor incididunt<br />labore dolore magna aliqua. Ut enim minim<br /> veniam, quis.</p>
        </div>
        <h1 className='time1'>mon-sat: 12pm - 11pm</h1>
        <h1 className='time2'>sunday:9 am - 23 pm</h1>
       <a href='about'> <button className='more'>more about us</button></a>
    </div>
    </div>
  )
}

export default Service