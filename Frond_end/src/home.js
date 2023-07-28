import { LinearProgress, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';
import { logout } from './reduxauth/action';
import './home.css';
import sup from "./sup.jpg"
import ven from "./ven.jpg"
import dis from "./dis.jpg"
const Home=() =>{
  const user=useSelector((state)=>state.username);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
    const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
    }
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
        <Tab value="Active" href="/" label="HOME" />
        <Tab value="two" href="/AboutPage" label="ABOUT US" />
        <Tab value="tcdhree" href="/feedback" label="FEEDBACK" />
        <Tab value="six" href="/products" label="PRODUCTS" />
        <div className="log">
        {user?(<><AppsIcon classname="icon" onClick={handleLogout}>star</AppsIcon><h2>{user}</h2></>):
        <Tab value="four" href="/login" label="LOGIN" />
        
      }
      </div>
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
    <h1><center><mark>VENDOR MANAGEMENT SYSTEM </mark></center></h1>
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
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
<div classname="homee">
<main className="main-content">
<section className="services-section">
  <div className="service-card">
    <img src={sup} alt="Car Insurance" />
    <h3 className="service-title">SUPPLIERS</h3>
    <p className="service-description">A supplier is a person or business that provides a product or service to another entity. The role of a supplier in a business is to provide high-quality products from a manufacturer at a good price to a distributor or retailer for resale. A supplier in a business is someone who acts as an intermediary between the manufacturer and retailer, ensuring that communication is forthcoming and stock is of sufficient quality.</p>
  </div>
  <div className="service-card">
    <img src={ven} alt="Home Insurance" />
    <h3 className="service-title">VENDORS</h3>
    <p className="service-description">A vendor is a party in the supply chain that makes goods and services available to companies or consumers. The term "vendor" is typically used to describe the entity that is paid for goods provided rather than the manufacturer of the goods itself. However, a vendor can operate as both a supplier (or seller) of goods and a manufacturer.
    </p>
  </div>
  <div className="service-card">
    <img src={dis} alt="Life Insurance" />
    <h3 className="service-title">DISTRIBUTORS</h3>
    <p className="service-description">A distributor is an intermediary entity between a producer of a product, or manufacturer, and a downstream entity in the distribution channel or supply chain. The downstream entity is typically a retailer or value-added reseller (VAR), but it can also be a wholesaler.The distributor is an integral supply chain component, acting as an intermediary between the manufacturer and the downstream entity. </p>
    </div>
    </section>
    </main>
    </div>
    <div class="footer">
    <div class="content">
      <div class="services">
        <h4>SERVICES PROVIDED : </h4>
        <br></br>
        <p><a href="#">BARGAINING</a></p>
        <p><a href="#">BUYING</a></p>
        <p><a href="#">SELLING</a></p>
        <p><a href="#">EXCHANGING</a></p>
      </div>
      <div class="social-media">
        <h4>SOCIAL  MEDIA :</h4>
        <br></br>
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
          <a href="https://github.com"
            ><i class="fab fa-github"></i> Github</a
          >
        </p>
        <p>
          <a href="https://www.facebook.com"
            ><i class="fab fa-facebook"></i> Facebook</a
          >
        </p>
        <p>
          <a href="https://www.instagram.com"
            ><i class="fab fa-instagram"></i> Instagram</a
          >
        </p>
      </div>
      <div class="links">
        <h4>QUICK LINKS :</h4>
        <br></br>
        <p><a href="#">Home</a></p>
        <p><a href="#">About</a></p>
        <p><a href="#">Blogs</a></p>
        <p><a href="#">Contact</a></p>
      </div>
      <div class="details">
        <h4 class="address">ADDRESS : </h4>
        <br></br>
        <p>
          187/93 DUBAI MAIN ROAD,DUBAI KURUKU SANTHU,DUBAI
        </p>
        <h4 class="mobile">MOBILE</h4>
        <br></br>
        <p><a href="#">9443891305</a></p>
        <h4 class="mail">EMAIL</h4>
        <br></br>
        <p><a href="#">vendorsport@gmail.com</a></p>
      </div>
      <footer>
      </footer>
      </div>
      </div>
              </div>
  )
}
export default Home
