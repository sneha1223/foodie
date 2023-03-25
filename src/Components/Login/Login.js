import React , {useState,useContext} from 'react'
import {FirebaseContext} from '../../Store/FirebaseContext'
import './Login.css'
import {useHistory} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div className='loginDiv'>
    <div className='logindetail'></div>
    <h1 className='signin'>Sign in</h1>
    <form onSubmit={handleLogin} >
    <input
       className='log-name' 
       type='email'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       id="fname"
       name="email"
       placeholder='Email'>
    </input>
    <hr className='log-line' />
    <input
       className='log-pass' 
       type='password'
       value={password}
          onChange={(e) => {
            setPassword(e.target.value)}}
          id="lname"
          name="password"
       placeholder='Password'>
     </input>
     <hr className='pass-line' />
     <button className='log-btn'>Login</button>
     </form>
   
    <p className='acnt'>Don't you have an Account? <a href='/signup'>Signup</a></p>
    </div>
  )
}

export default Login