import React from 'react'
import Cnav from '../Objects/Cnav/Cnav'
import Resfirst from '../Reservation/Resfirst/Resfirst'
import Resfooter from '../Reservation/Resfooter/Resfooter'
import Whitediv from '../Reservation/WhiteDiv/Whitediv'



function ReservationPage() {
  return (
    <div>
    <Cnav />
    <Resfirst />
    <Whitediv />
    <Resfooter />
    </div>
  )
}

export default ReservationPage