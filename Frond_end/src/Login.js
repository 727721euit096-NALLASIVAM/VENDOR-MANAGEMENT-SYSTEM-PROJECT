import React, { useState } from "react";
import { Link } from "react-router-dom";
import './login.css';

import { useDispatch } from "react-redux";
import { login } from "./reduxauth/action";
import axios from "axios";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(username));
      setUsername('');
    const data = {
      username:username,
      password:password
    }
      axios.post("http://localhost:8180/adddetail",data)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
              });
    }
    return (
        
        <div className="login">
        <br></br>
        <br></br>
        <br></br>

        <div className="auth-form-container fu">
            <h2><center>LOGIN PAGE :</center></h2>
            <br></br>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <br></br>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username" required />
                <br></br>
                <label htmlFor="password">PASSWORD</label>
                <br></br>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"  />
                <br></br>
                <div className="abc">
                <center><button type="submit">SUBMIT</button></center>
                </div>
                <br></br>
                </form>
                <center><Link to="/reg"><b><h4>Don't have an account ? Click to Register.</h4></b></Link></center>
                <br></br>
                <div className="lmo">
                <center><Link to="/"><b><u><i>Go to Home Page</i></u></b></Link></center>
                </div>
                </div>
                </div>
    )
}
export default Login;
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Row } from 'react-bootstrap';
// import './login.css';
// class Login extends Component {
//         constructor(props) {
//             super(props);
//             this.state = {  Username: '',
//                             Password:'',
//                             error:false,
//                         };
//             this.handleSubmit = this.handleSubmit.bind(this);
//           } 
//         handleSubmit(e){
//             e.preventDefault(); }
//   render() {
//     return (
//         // <div className='container'>
//       <div className='form-div'>
//       <Form className="wrapper">
      
//       <br/>
//       <Form.Group controlId="formGridlabel" id="heading" className="col col-sm-8 " onSubmit={this.handleSubmit}><h1 id="h1"><center>Login</center></h1></Form.Group>
//       <br/>
//       <br/>
//       <Form.Group className="col col-sm-10">
//           <Form.Label htmlFor="username" className="label">
//               Username
//           </Form.Label> 
//       <Row className="group">
//           <Form.Control
//               type="text"
//               size="30"
//               className="input"
//               name="username"
//               onChange={(e)=>this.setState({ Username: e.target.value})}
//               required
//           />
//           </Row>
//           </Form.Group>
//       <br/>
//       <br/>
//           <Form.Group className="col col-sm-10">
//           <Form.Label htmlFor="password" className="label">
//               Password
//           </Form.Label>
//       <Row className="group">
//           <Form.Control
//               type="password"
//               minLength="4"
//               className="input"
//               name="password"
//               onChange={(e)=>this.setState({ Password: e.target.value})}
//               required
//           />
//       </Row>
        
//           </Form.Group>
//       <button type="submit" id="btn" onClick={this.handleSubmit} className="btn btn-secondary">
//      <center><Link to='/products'>Login </Link></center>
        
//       </button>
//       <Link to='/reg'><h6><center>Don't have an account?register here.</center></h6></Link>
//       <br/>
//       <span className="footer"></span>
//   </Form>
//   </div>
// //   </div>
//     )
//   }
// }

// export default Login;