import {  Tab, Tabs } from '@mui/material';
import React from 'react'
import Footer from './footer';
import "./home.css";
import { Link } from 'react-router-dom';

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div>
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
        <Tab value="two" href="/AboutPage" label="About Us" />
        <Link to='./products'><Tab value="three" href="/" label="Products" /></Link>

        <Tab value="four" href="/Login" label="Login" />
        </Tabs>
        </div>
        </header>
        </div>
        <Footer/>
        </div>



  )
}
// import { LinearProgress, Tab, Tabs } from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import './home.css';
// import Footer from './footer';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   const [value, setValue] = React.useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <div className="home">
//     <div className="head">
//         <header>
//       <div class="navigation">
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         aria-label="secondary tabs example">
//         <Tab value="Active" href="/" label="Home" />
//         <Tab value="two" href="/" label="About us" />
//         <Tab value="three" href="/hi" label="Products" />
//         <Tab value="four" href="/Login" label="Login" />
      
//         </Tabs>
//         </div>
        
//         </header>
//     </div>
    
    
    
//     <h1><center><mark>VENDOR MANAGEMENT SYSTEM </mark></center></h1>
   
//     <br></br>
//     <div class="footer">
//     <div class="heading">
// <center>

// </center>
//     </div>
    
//       </div>
//       </div>
              
//   )
// }