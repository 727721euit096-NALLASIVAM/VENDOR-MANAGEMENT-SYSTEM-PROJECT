import React,{useState} from "react";
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from "./home";
import {Register} from "./Register";
import Login from "./Login";
import Products from "./products";
import AboutPage from "./AboutPage";
import { Feedback } from "./feedback";



function App() {
return (
    <div>
    <div className="main">
    <footer/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/reg" element={<Register/>}></Route>
    <Route path="/feedback" element={<Feedback/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/AboutPage" element={<AboutPage/>}></Route>
  

  </Routes>
  </div>
 

  

 
    </div>
  );
}



export default App;