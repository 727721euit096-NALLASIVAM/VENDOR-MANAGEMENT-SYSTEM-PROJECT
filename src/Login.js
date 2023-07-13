import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>LOGIN PAGE</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">USER ID</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Type your user id here" id="email" name="email" />
                <label htmlFor="password">PASSWORD</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password here" id="password" name="password" />
                <button type="submit">LOG IN</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account ? Click here to Register</button>
        </div>
    )
}