import React from "react";

const RegisterForm:React.FC=()=>{
    return(
        <form>
            <input type="text" placeholder="Enter your name" required />
            <input type="text" placeholder="Enter your phone number" required />
            <input type="text" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
            <input type="password" placeholder="Confirm your password" required />
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;