import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './register.css';
import axios from "axios";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNo, setphoneNo] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            username:username,
            email:email,
            phoneNo:phoneNo,
            password:password,
        }
        axios.post("http://localhost:8080/api/V1/auth/register",data)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
              });
}
    return (
        <div className="auth-form-container">
        <h1><center>Register Page :</center></h1>
        <br></br>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">User name</label>
            <br></br>
            <input value={username} name="name" onChange={(e) => setUsername(e.target.value)} type="text" id="name" placeholder="Username" />
            <br></br>
            <label htmlFor="email">Email</label>
            <br></br>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <br></br>
            <label htmlFor="phoneNo">Phone number</label>
            <br></br>
            <input value={phoneNo} onChange={(e) => setphoneNo(e.target.value)} type="text" placeholder="phonenumber" id="password" name="password" />
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="passwor" name="passwor"/>
            <br></br>
            <div className="abc">
            <center><button type="submit">SUBMIT</button></center>
            </div>
            <br></br>
            <center><Link to="/login"><b><h4>Already have an account ? Click to Login.</h4></b></Link></center>
            <br></br>
            <div className="lmo">
                <center><Link to="/"><b><u><i>Back to Home Page</i></u></b></Link></center>
                </div>
        </form>
    </div>
    )
}
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Row,InputGroup } from 'react-bootstrap';
// import Login from './Login';
// import './Form.css';
// import axios from "axios";

// function Forms() {
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [phoneNo, setphoneNo] = useState('');
//     const [password, setPassword] = useState('');
//     const [conformPassword, setconformPassword] = useState('');


//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         const data={
//                         username:username,
//                         email:email,
//                         phoneNo:phoneNo,
//                         password:password,
//                         conformPassword:conformPassword
//                     }
//         if(Username.length===0||Email.length===0){
//             setError(true);
//         }
//         if(Mobile.length!==10){
//             setError(true);
//         }
//         if(Password!==ConfirmPassword){
//             setError(true);
//         }
//         if(Username&&Email){
//           console.log(Username,Email,Mobile,Password,Error);
//         }
//         axios.post("http://localhost:8180/addDetails",data)
//                     .then(function (response) {
//                         console.log(JSON.stringify(response.data));
//                       })
//                       .catch(function (error) {
//                         console.log(error);
//                       });
//     }
//   return (
//     <div class="Registration">
//     <Form className="form" onSubmit={handleSubmit} >
//         <div>
//         <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20"><h3><center>REGISTER HERE</center></h3></Form.Group>
//         <br/>
//         <Row className="mb-3">
//         <Form.Group controlId="formBasicEmail" className="col col-sm-10">
//             <Form.Label className='input'>Username</Form.Label>
//             <Form.Control placeholder='UserName' onChange={e=>setUsername(e.target.value)}/>
//         {Error && Username.length<=0?
//         <Form.Label className='error'>UserName can't be Empty </Form.Label>:""}
//             </Form.Group>   
//     </Row>
//         <Row className="mb-3">
//         <Form.Group controlId="formBasicEmail" className="col col-sm-10">
//             <Form.Label className='input'>Email</Form.Label>
//             <InputGroup>
//         <Form.Control placeholder='Email' onChange={e=>setEmail(e.target.value)} /><InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
//             </InputGroup>
//         {Error && Email.length<=0?
//         <label className='error'>Email can't be Empty </label>:""}
//             </Form.Group>
//         </Row>
        
//         <Row className="mb-3">
//         <Form.Group controlId="formBasicMobile" className="col col-sm-10">
//             <Form.Label className='input'>Mobile Number</Form.Label>
//             <InputGroup>
//                 <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
//             <Form.Control placeholder='Mobile Number' onChange={e=>setMobile(e.target.value)}/>
//             </InputGroup>        </Form.Group>
//         </Row>
//         <Form.Label className='input'>Password</Form.Label>
//         <Row className="mb-3">
//         <Form.Group controlId="formBasicEmail" className="col col-sm-10">
//             <Form.Control placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
//         </Form.Group>
//         </Row>
        
//         <Row className="mb-3">
//         <Form.Group controlId="formBasicEmail" className="col col-sm-10">
//             <Form.Label className='input'>Confirm Password</Form.Label>
//             <Form.Control placeholder='Re-Enter Password' onChange={e=>setConfirmPassword(e.target.value)}/>
//         </Form.Group>
//         </Row>
//            <center><Link to='/login'><button id="button" className="me-1 btn btn btn-lg" onSubmit={<Login/>}>Submit</button></Link></center>
//         </div>

//      <h3><Link to='/login'><h6><center>Already have an account?login here.</center></h6></Link></h3>
//      </Form>
     
//       <br/>
//       <br/>
//       <br/>
//      </div>
//   )
// }

// export default Forms