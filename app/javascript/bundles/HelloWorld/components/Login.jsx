import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';

 class Login extends React.Component {

  constructor(props) {
    super(props);
//    Define Initial states 
    this.state = {
      email : '',
      password : '',
      loginDir: ''
     
    }
  }

// Handle The New Props
  componentWillReceiveProps(nextProp) {
    if(nextProp.LoginReducer.data) {
      localStorage.setItem('userEmail', this.state.email);
      localStorage.setItem('userPassword', this.state.password);
      this.props.history.push('/hello_world/userlogin',)
    }
    else
      {
        alert("Invalid crediatial")
      }
  }
// Submit the form
    handleSubmit = () => {
      const {email, name, password} = this.state;
      const checkValidation = this.validateForm();
  }

// Validate Form
   validateForm () {
    const State = this.state;
    const EmailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    validate email property should not blank
    if(this.state.email === "") {
         alert("email define")
       }
//     Validate Email property
       else if(!EmailValidation.test(this.state.email)) {
        alert("Please fill the correct email!")
       }
       else if(State.email != '' && State.name != '' && State.password != ''  ) {
        const OBJ={ 'email': this.state.email,'password': this.state.password, 'role': 2}
        const USER = {'user' : OBJ }
        this.props.login(USER)
       }
       else if(State.email != '' && State.name != '' && State.password != ''  ) {
        const OBJ={ 'email': this.state.email,'password': this.state.password, 'role': 1}
        const USER = {'user' : OBJ }
        this.props.login(USER)
       }
   }

// Multiple Redirects
  signUpForm() {
    const State = this.state;
      if( State.loginDir=="User") {
        this.props.history.push('/hello_world/user')
      }
      else if(State.loginDir=="Admin") {
        this.props.history.push('/hello_world/admin')
      }
      else {
        this.props.history.push('/hello_world/user')
      }
    }

// handle onChangec for each property 
    handleChange(val) {
      this.setState({loginDir : val.target.value})
  }

  render() {

    return (
      <div className="container" align="center">
        <h1 className="form-heading">Login Form </h1>
         <input type="radio" 
            id="user" 
            onChange ={(val) => this.handleChange(val)} 
            name="login" 
            value="User" checked
            />
          <label > User Login </label> 
          <input type="radio" id="Admin" 
            name="login" 
            onChange ={(val) => this.handleChange(val)} 
            value="Admin"
            />
          <label> Admin Login </label > 
          <br/>
          <div className="input-fields">
           <span> User Id &nbsp;
            <input className="form-control col-md-3"
              type="email" 
              onChange={(e) => this.setState({ email: e.target.value})} 
              value={this.state.email}
           />       
          </span>
         </div> 
         <br/>
         <div className="input-fields">
          <span> Password  &nbsp;
            <input 
              type="password"  
              onChange={(e) => this.setState({ password: e.target.value})} 
              value={this.state.password}
              className="form-control col-md-3" 
            />
          </span>
         </div>
         <br/>
         <div className="btnClass">
          <button className="btn btn-primary" onClick = {() => this.handleSubmit()}> Login </button>
          <button className="btn btn-primary" onClick = {() => this.signUpForm()}> Sign up </button>
        </div>
      </div>
    );
  }
}

// Use Redux state in this component as a Props
function mapStateToProps({ LoginReducer  }) {
  return {
    LoginReducer
  };
}
export default connect(mapStateToProps, actions)(Login);
