import React, { useState } from "react";
import { Link } from "react-router-dom";
import './feedback.css';
export const Feedback = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pas, setPas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        
        <div className="login">
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="auth-form-container fu">
      
        
            <h2><center>FEEDBACK PAGE :</center></h2>
            <br></br>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">NAME :</label>
                <br></br>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your name" id="email" name="email" />
                <br></br>
                <label htmlFor="password">EMAIL :</label>
                <br></br>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="text" placeholder="Enter your email" id="password" name="password" />
                <br></br>
                <label htmlFor="passwor">GIVE YOUR FEEDBACK :</label>
                <br></br>
                
                <div className="gbi">
                <input value={pas} onChange={(e) => setPas(e.target.value)} type="text" placeholder="Type Your Feedback here" id="passwor" name="passwor"/>
                </div>
                <br></br>
                <div className="abc">
                <center>
                <button type="submit"><Link to="/">SUBMIT</Link></button>
                </center>
                
                </div>
                <br></br>
                </form>
                </div>
                </div>
    )
}