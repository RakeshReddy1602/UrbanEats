
function Register(){
    return(
        <div>
            <h1>Register</h1>
            <form>
                <div className="flex flex-col">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" name="email"></input>
                </div>
                <div className="flex flex-col">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" name="password"></input>
                </div>
                <div className="flex flex-col">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" name="confirmPassword"></input>
                </div>
            </form>
        </div>
    )
}
export default Register