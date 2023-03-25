import React from 'react'
import './Menu.css'

function Menu() {
  return (
    <div className='mainpagediv'>
    <div className='menu-list' >
        <p className='choose'>choose and try</p>
        <h1 className='menus'>From our menu</h1>
        </div>
    <div className='items'>
      <h1 className='first'>deviled eggs & ham </h1>
      <hr className='line'></hr>
      <h1 className='price'>$59.00</h1>
      <p className='sub'>Ut enim minim veniam,quis</p>

      <h1 className='scnd'>Hogs in a blanket</h1>
      <hr className='line1'></hr>
      <h1 className='price1'>$79.00</h1>
      <p className='sub1'>Natus error sit voluptatem.</p>

      <h1 className='thirds'>pimento cheese & bacon</h1>
      <hr className='line2'></hr>
      <h1 className='price2'>$49.00</h1>
      <p className='sub2'>Ut vel placerat eros auntim</p>
    </div>
    <div>
      <h1 className='fourth'>caramelized onion dip</h1>
      <hr className='line3'></hr>
      <h1 className='price3'>$59.00</h1>
      <p className='sub3'>Utvel placerat eros auntim</p>

      <h1 className='fifth'>Brioche crab melts</h1>
      <hr className='line4'></hr>
      <h1 className='price4'>$39.00</h1>
      <p className='sub4'>Ut enim minim veniam, quis.</p>

      <h1 className='sixth'>cast-iron cornmeal</h1>
      <hr className='line5'></hr>
      <h1 className='price5'>$69.00</h1>
      <p className='sub5'>Natus error sit voluptatem</p>
    
      <img className='interiors' src='https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
      <img className='chef-imgs' src='https://images.pexels.com/photos/6035997/pexels-photo-6035997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
      <img className='beer-glasses' src='https://images.pexels.com/photos/65210/beer-a-pint-cup-alcohol-65210.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
      <img className='rests' src='https://images.pexels.com/photos/225228/pexels-photo-225228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
      </div>
      </div>
  )
}

export default Menu