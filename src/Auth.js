import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";

function Auth(){
    const [loginFormVisible,toggleDisplayForm] = useState(true);

    const toggleForms = ()=>{
        toggleDisplayForm(loginFormVisible => {
            return !loginFormVisible;
        })
    }
 
        return (
         <div className="min-h-screen flex flex-col items-center justify-center">
            {loginFormVisible ? <Login/> : <Register/>}
            {loginFormVisible ?  <p>Don't have an account ?  <span onClick={toggleForms} className="link text-green-700">Register with us</span></p>: 
                                <p>Already have an account ? <span onClick={toggleForms} className="link">Login</span></p>}
             <p className="text-red-700 cursor-pointer">Forget Password</p>
         </div>
        )

}
export default Auth;