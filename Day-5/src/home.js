import { LinearProgress, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './home.css';
export default function Home() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="home">
    <div className="head">
        <header>
      <div class="navigation">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example">
        <Tab value="Active" href="/" label="Home" />
        <Tab value="two" href="/" label="Contact Us" />
        <Tab value="three" href="/" label="Products" />
        <Tab value="four" href="/Login" label="Login" />
        </Tabs>
        </div>
        
        </header>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1><center><mark>VENDOR MANAGEMENT SYSTEM 🛒🛍️</mark></center></h1>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
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