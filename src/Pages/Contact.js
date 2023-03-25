import React from 'react'
import Cofooter from '../Contact/Cofooter/Cofooter'
import Coimg from '../Contact/Cofooter/Coimg/Coimg'
import Cofst from '../Contact/Cofst/Cofst'
import Cnav from '../Objects/Cnav/Cnav'

function ContactPage() {
  return (
    <div>
    <Cnav />
    <Cofst />
    <Coimg />
    <Cofooter />
    </div>
  )
}

export default ContactPage