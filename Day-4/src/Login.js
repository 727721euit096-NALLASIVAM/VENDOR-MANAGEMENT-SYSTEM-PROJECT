import React, { useState } from "react";
import { Link } from "react-router-dom";
import './login.css';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container fu">
            <h2>LOGIN PAGE !!!</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">PASSWORD</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit"><Link to="/">SUBMIT</Link></button>
                </form>
                <center><Link to="/reg"><b><h4>Don't have an account ? Click to Register.</h4></b></Link></center>
                </div>
    )
}