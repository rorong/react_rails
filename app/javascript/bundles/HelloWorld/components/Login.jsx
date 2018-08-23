import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
  static propTypes = {
  };
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      loginDir: ''
     
    }
  }

    handleSubmit = () => {
     const {email, name, password} = this.state;
      const checkValidation = this.validateForm();
  }

    validateForm () {
      const State = this.state;
    const PwdValidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/;
    const EmailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    
    if(this.state.email === "") {
      alert("email define")
    }
    else if(!EmailValidation.test(this.state.email)) {
      alert("Please fill the correct email!")
    }
    else if(!PwdValidation.test(this.state.password)) {
      alert("Password should be more than 6 characters with letters, numbers, special character")
    }

    else if(State.email != '' && State.name!= '' && State.password != '' && State.loginDir == 'User' ) {
         this.props.history.push('/hello_world/userlogin')
    }
   else if(State.email != '' && State.name!= '' && State.password != '' && State.loginDir == 'Admin' ) {
         this.props.history.push('/hello_world/userlogin')
    }
  }


  signUpForm() {
   const State = this.state;
      if( State.loginDir=="User") {
        this.props.history.push('/hello_world/user')
      }
     else if(State.loginDir=="Admin") {
        this.props.history.push('/hello_world/admin')
      }
     else {
        alert("Please Enter Credential")
    }
  }

  handleChange(val) {
    this.setState({loginDir : val.target.value})
  }

  render() {
    return (
      <div>
        <input type="radio" 
          id="user" 
          onChange ={(val) => this.handleChange(val)} 
          name="login" 
          value="User"
        />
        <label for="User">User Login</label> 
        <input type="radio" id="Admin" 
         name="login" 
         onChange ={(val) => this.handleChange(val)} 
         value="Admin"
        />
        <label for="Admin">Admin Login</label > 
        <br/>
        <span> User Id &nbsp;
          <input 
            type="email" 
            onChange={(e) => this.setState({ email: e.target.value})} 
            value={this.state.email}
          />
        </span> 
        <br/>
        <span> Password  &nbsp;
          <input 
            type="password"  
            onChange={(e) => this.setState({ password: e.target.value})} 
            value={this.state.password} 
          />
        </span>
         <br/>
          <button onClick = {() => this.handleSubmit()}> Login </button>
          <button onClick = {() => this.signUpForm()}> Sign up </button>
      </div>
    );
  }
}
