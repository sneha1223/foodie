import React from 'react'
import Search from '../../Assests/Search'
import './Navbar.css'
import AppsIcon from '@mui/icons-material/Apps';



function Navbar() {
  return (
    <div className='mainDivs'>
     <div className='navbarDiv'>
    <a href='/'> <p className='homy'>Home</p></a>
    <a href='/about'> <p className='about'>About us</p></a>
    <a href='/menus' ><p className='menu'>  Menu</p> </a>
     <a href='/res'><p className='reservation'>Reservation</p></a>
     <a href='/contact'><p className='contact'>Contact</p></a>
     <img className='image' src='https://foodie.themerex.net/wp-content/uploads/2022/08/logo-white.png'alt=''></img>
     <Search></Search>

     <AppsIcon className='appicon'></AppsIcon>
    <a href='/login'> <button className='booknow'>Login</button></a>
    
     </div>

      </div>
  )
}

export default Navbar