import React from 'react'

import Navbar from '../Components/Navbar/Navbar'
import Content from '../Components/Content/Content'
import Services from '../Components/Services/Service'
import Menu from '../Components/Menumain/Menumain'
import Fourth from '../Components/Fourthpage/Fourth'
import Fifth from '../Components/FifthPage/Fifth'
import Sixth from '../Components/SixthPage/Sixth'
import Seventh from '../Components/SeventhPage/Seventh'
import Booking from '../Components/Booking/Booking'
import Footer from '../Components/Footer/Footer'

function HomePage(props) {
  return (
  <div>
    <Navbar />
    <Content />
    <Services />
    <Menu />
    <Fourth />
    <Fifth />
    <Sixth />
    <Seventh />
    <Booking />
    <Footer />
  </div>
  )
}

export default HomePage