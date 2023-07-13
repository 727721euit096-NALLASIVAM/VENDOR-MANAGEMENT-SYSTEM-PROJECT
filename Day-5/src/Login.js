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
        <div className="login">
        <div className="auth-form-container fu">
            <h2><center>LOGIN PAGE :</center></h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">PASSWORD</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit"><Link to="/">SUBMIT</Link></button>
                </form>
                <center><Link to="/reg"><b><h4>Don't have an account ? Click to Register.</h4></b></Link></center>
                </div>
                <br/>
        <div class="footer">
      <div class="heading">
<center>
<h2>VENDOR MANAGEMENT SYSTEM<sup>™</sup></h2>
</center>
      </div>
      <div class="content">
        <div class="services">
          <h4>SERVICES PROVIDED : </h4>
          <p><a href="#">BARGAINING</a></p>
          <p><a href="#">BUYING</a></p>
          <p><a href="#">SELLING</a></p>
          <p><a href="#">EXCHANGING</a></p>
        </div>
        <div class="social-media">
          <h4>SOCIAL  MEDIA :</h4>
          <p>
            <a href="#"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="#"
              ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://github.com/farazc60"
              ><i class="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="https://www.facebook.com/codewithfaraz"
              ><i class="fab fa-facebook"></i> Facebook</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com/codewithfaraz"
              ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>QUICK LINKS :</h4>
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><a href="#">Blogs</a></p>
          <p><a href="#">Contact</a></p>
        </div>
        <div class="details">
          <h4 class="address">ADDRESS : </h4>
          <p>
            187?93 PV STREET SALEM - 1
          </p>
          <h4 class="mobile">MOBILE</h4>
          <p><a href="#">9443891305</a></p>
          <h4 class="mail">EMAIL</h4>
          <p><a href="#">vendor@gmail.com</a></p>
        </div>
        <footer>
        </footer>
        </div>
        </div>
                </div>
    )
}