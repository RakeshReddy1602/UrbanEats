import { Link, useNavigate,Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Register from "./Register";
function Login(){
    const navigate = useNavigate()
    const [loginFormData,setLoginForm] = useState({
        email:'',
        password : ''
    });
    const handleLoginFormChange = () => {

    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Routes>
            <Route path='/register' element = {<Register/>}/>
            </Routes>
            <h1>Login</h1>
            <form onSubmit={login}>
              <div className="flex flex-col">
              <label>Email</label>
                <input type="email" id="email" placeholder="Enter email" value={loginFormData.email} onChange={handleLoginFormChange}></input>
              </div>
               <div className="flex flex-col">
                    <label>Password</label>
                    <input type="password" id="password" placeholder="Enter password" value={loginFormData.password} onChange={handleLoginFormChange}></input>
               </div>
               <div>
                <button type="submit">Login</button>
               </div>
            </form>
        </div>
    )

    function login(){
        if(checkCredentials){
               navigate('welcome');
        }
    }

    function checkCredentials(){
        return true;
    }
}

export default Login;