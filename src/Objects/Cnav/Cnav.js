import React from 'react'
import './Cnav.css'
import Searchnav from '../../Assests/Searchnav'
import AppsIcon from '@mui/icons-material/Apps';

function Cnav() {
  return (
    <div>
    <div className='navDiv'>
   <a href='/'><p className='homely'>Home</p></a> 
    <a href='/about'><p className='aboutus'>About us</p></a>
   <a href='/menus' ><p className='menulist'>  Menu</p> </a>
   <a href='/res'><p className='reservations'>Reservation</p></a> 
    <a href='/contact'><p className='contactus'>Contact</p></a>
    <img className='foodie' src='https://foodie.themerex.net/wp-content/uploads/2022/08/logo-dark.png' alt=''></img>
    <Searchnav></Searchnav>
    <AppsIcon className='app'></AppsIcon>
    <a href='/res'><button className='booknows'>book a table</button></a>
    </div>
        
    </div>
  )
}

export default Cnav