import React from 'react'
import './Seventh.css'

function Seventh() {
  return (
    <div className='blog-div'>
    <div className='blogDiv'>
      <p className='blog'>from our blog</p>
      <h1 className='news'>our news and articles</h1>

      <button className='clasy-sauce'>
        <p className='recipes'>recipes</p>
        <p className='date'>august 18, 2020</p>
        <h1 className='head1'>clasy sauces to makes<br /> meat melt in your <br />mouth</h1>
        <img className='fst' src='https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
      </button>

      <button className='start'>
      <p className='recipes'>recipes</p>
      <p className='date2'>august 18, 2020</p>
      <h1 className='head2'>apetizers to start your<br />romantic date <br />with</h1>
      <img className='second' src='https://images.pexels.com/photos/5779885/pexels-photo-5779885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
      
    </button>

    <button className='summer'>
    <p className='recipes'>recipes</p>
    <p className='date3'>august 18, 2020</p>
    <h1 className='head3'>5 summer dessert<br />that you haven't tried <br />yet</h1>
    <img className='third' src='https://images.pexels.com/photos/6542780/pexels-photo-6542780.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
  </button>


      </div>

     </div>
  )
}

export default Seventh