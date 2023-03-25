import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../Store/FirebaseContext";
import "./Signup.css";
import {useHistory} from 'react-router-dom'

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const {firebase} = useContext(FirebaseContext)

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
             history.push("/login")
        })

      })
    })
   
  };
  return (
    <div className="signDiv">
      <div className="signdetail">
      <h1 className="signup">Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="sign-name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="fname"
          name="name"
          placeholder="Username"
        ></input>
        <hr className="sign-line" />

        <input
          className="sign-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="fname"
          name="email"
          placeholder="Email"
        ></input>
        <hr className="signemail-line" />

        <input
          className="sign-phone"
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="lname"
          name="phone"
          placeholder="Phone Number"
        ></input>
        <hr className="signphone-line" />

        <input
          className="sign-pass"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)}}
          id="lname"
          name="password"
          placeholder="Password"
        ></input>
        <hr className="signpass-line" />
     <button className="sign-btn">Signup</button>
     </form>
      </div>
    </div>
  );
}

export default Signup;
