import React from 'react'
import './Cofst.css'

function Cofst() {
  return (
    <div>
    <img className='fullmap' src='https://blocks.wp-a2z.org/wp-content/uploads/sites/10/2019/02/advanced-gutenberg-blocks-gmap-block-initial.jpg' alt=''></img>
    <h1 className='details'>Contact details</h1>
     <p className='addrs'>785 15h street, office 478<br /> Berline, De 81566<br /><br />info@email.com<br /><br /></p>   
     <p className='phn-nmbr'>+1840 841 25 69</p>
     <form>
     <input type='text' className='name-sec' placeholder='Name'></input><hr className='name-line'/>
     <input type='text' className='email-sec' placeholder='Email Address'></input><hr className='email-line' />
     <input type='phone' className='phone-sec' placeholder='Phone'></input><hr className='phone-line' />
     <input type='text' className='sub-sec' placeholder='Subject'></input><hr className='sub-line' />
     <input type='text' className='help-sec' placeholder='How can we help you? Feel free to get in touch!'></input><hr className='help-line' />
     <button className='btn-get'>Get in touch</button>
     <button className='btn-agree'></button>
     <p className='collect'>i agree that my data is collected and store</p>
     </form>
    
     </div>
  )
}

export default Cofst