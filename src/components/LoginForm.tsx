import React from "react";

const LoginForm:React.FC=()=>{
    return(
        <form>
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;