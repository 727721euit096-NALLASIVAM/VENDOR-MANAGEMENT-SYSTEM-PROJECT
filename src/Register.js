import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>REGISTRATION FORM</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">First name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Type your first name" />
            <label htmlFor="name">Last name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Type your last name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Type your email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account ? Click to Login</button>
    </div>
    )
}