import React from "react";
import "./LoginPage.css"
import { Link } from 'react-router-dom'
function LoginPage() {
    return( 
        <div className="Login">
          <div className="Facebook">
            <div className="Facebooktext">  
                FamBook
       </div>
          <div className="title">
          <br></br>A place to connect and share 
          <br></br>with the people in you love.
          </div>
          </div>      
          <div className="loginContainer">        
          <div className="logindetail">
          <input type="email"placeholder="Email address"/>
          <br></br>
          <input type="Password"placeholder="Password"/>
          <br></br>
          <button className="btn">
		<Link to="/HeaderArea">LogIn</Link>
            </button>
	  <br></br>
            </div>
        <div className="forget">
          <a href="forget">Forgotten account?</a>
        </div>
        <div className="create">
        <br></br> 
        <button className="btns">
          Create New Account
        </button>
      </div>
      <p></p>
      <br></br>
      <div className="page">
        <a href="createpage">Create a Page </a> for Mom and Dad, Sibiling, and Cousins.
            </div>
          </div>
        </div>
    )
}
export default LoginPage