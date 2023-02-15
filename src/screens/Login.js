import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";

export default function Login() {

  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate()//used to go to  the homepage after logging in 

  async function hadleSubmit(e) {
    e.preventDefault() //* it prevents the browser to reload or refresh on clicking the submit button and it is an synthetic event
    const response = await fetch('http://localhost:5000/api/loginuser', {
      //yahn se code ratlo
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })// iss line ke through hum data frontend se backend me bhej rhe hai

    })
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }));
    const json = await response.json()
    console.log(json);
    console.log("hello");
    if (!json.success) {
      alert('enter valid credentials')
    }


    if (json.success) { //used to go to  the homepage after logging in
      localStorage.setItem("authToken",json.authToken) // storing the authToken in the local storage with the variable name "authToken" 
      navigate("/")
    }

  }
  function handleChange(event) {
    setcredentials({ ...credentials, [event.target.name]: event.target.value }) //json me data ho toh aise state change karte hai
  }

  return (
    <>
    <div className='container'>
      <form onSubmit={hadleSubmit}>
        
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={handleChange} />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleChange} />
        </div>

        <button type="submit" class="btn btn-success">Submit</button>
        <Link to='/createuser' className='m-3 btn btn-danger'>I'm a new user</Link>
      </form>
    </div>
</>
  )
}
