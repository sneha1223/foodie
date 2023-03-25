import React from 'react'
import Cnav from '../Objects/Cnav/Cnav'
import Menu from '../Menu/Menu-first/Menu'
import Menuscnd from '../Menu/Menu-scnd/Menuscnd'
import Menuthird from '../Menu/Menu-third/Menuthird'
import Menufooter from '../Menu/MenuFooter/Menufooter'


function MenusPage() {
  return (
    <div>
    <Cnav />
    <Menu />
    <Menuscnd />
    <Menuthird />
    <Menufooter />
    </div>
  )
}

export default MenusPage