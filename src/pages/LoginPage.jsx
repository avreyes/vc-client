// import React, { Component } from 'react';
// //import './Login.css';
// import { useHistory } from 'react-router-dom';

// class Login extends Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             islogged: false,
//             loginParams: {
//                 email:'',
//                 password:''
//             }
//         }
        
//         handleSubmit = event => {
//             event.preventDefault();
//             this.props.history.push('/UserProfile')
    
//             fetch('http://localhost:3050/user/login', {
//                 method: 'POST',
//                 body: JSON.stringify(
//                     {user:{email: email, password: password}}
//                 ),
//                 headers: new Headers ({
//                     'Content-Type': 'application/json'
//                 })
//             }).then(
//                 (response) => response.json()
//             ).then((data) => {
//                 props.updateToken(data.sessionToken);
//             })
//             .catch(err => console.log(err))
//         };
//     }
    
    
//     login = event => {
//         let email = this.state.loginParams.email;
//         let password = this.state.loginParams.password;
        
//         if (email === 'admin@email.com' && password === 'pass123') {
//             localStorage.setItem('token', 'T');
//             this.setState({
//                 islogged: true
//             });
//         }
//         event.preventDefault();
//     };

//     render () {

//         return (
//             <form className='form-signin'>
//                 <h2 className='form-signin-heading'>Please sign in</h2>
//                 <label for='inputEmail' id='inputEmail' className='sr-only'>Email Address</label>
//                 <input type='email' id='inputEmail' className='form-control' placeholder='Email Address' required autoFocus />
//                 <label for='inputPassword' className='sr-only'>Password</label>
//                 <input type='password' id='inputPassword' className='form-control' placeholder='Password' required />
//                 <button className='btn btn-lg btn-primary btn-block' type='button' >Sign In</button>
//             </form>
//         )
//     }
// }
// export default Login;