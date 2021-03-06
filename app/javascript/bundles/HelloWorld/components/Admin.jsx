
import PropTypes from 'prop-types';
import React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { connect } from 'react-redux';
import { instanceOf } from 'prop-types';
import { signup } from '../actions/index'

class Admin extends React.Component {
  static propTypes = {
  };
  constructor(props) {
    super(props);
    // Initially state of email, Password and name
    this.state = {
     email : '',
     password: '',
     name : ''
    }
  }

   //Submitting the handle form
    handleSubmit = () => {
     const {email, name, password} = this.state;
      const checkValidation = this.validateForm();
   }
   //For Validating the Form
    validateForm () {
     const State = this.state;
     const PwdValidation = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,50}$/;
     const EmailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   //validate the blank check for name property
    if(this.state.name === "") {
      alert("define name")
    }
   //validate the length of the name property
    else if(this.state.name && this.state.name.length < 4 ) {
      alert("length problem")
    }
    //validate the blank check for email property
    else if(this.state.email === "") {
      alert("email define")
    }
    //Email Validation check       
    else if(!EmailValidation.test(this.state.email)) {
      alert("Please fill the correct email!")
    }
    //Password Validation Check
    else if(!PwdValidation.test(this.state.password)) {
      alert("Password should be more than 6 characters with letters, numbers, special character")
    }  
    else if(State.email != '' && State.name!= '' && State.password != '' ) {
      const OBJ={ 'email': this.state.email,'full_name': this.state.name, 'password': this.state.password , 'role': 'admin'}
      const ADMIN = {'user' : OBJ }
    //dispatch the signup action
      this.props.dispatch(signup(ADMIN))
      alert("CREATED")
      this.setState({name: '', email: '', password: ''})
    }
  }

  // Redirect to Login Screen
  handleLogin() {
    this.props.history.push('/hello_world/')
  }

  userPage() {
    const State = this.state;
    if(State.userData != '' && State.nameData != '' && State.passData != '') {
     this.props.history.push('/hello_world/admin/adminlogin')
   }
   else {
    alert("Please Enter Credential")
   }
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div className="container" align="center">
        <h1> Admin </h1>

        <div className="input-fields"  >
          <span> Full Name &nbsp;
          <input 
            type="text" 
            onChange={(e) => this.setState({ name: e.target.value})} 
            value={this.state.name}
            className="form-control col-md-3"
          />
        </span> 
        <br/>
        <span> Email &nbsp;
          <input 
            type="email" 
            onChange={(e) => this.setState({ email: e.target.value})} 
            value={this.state.email}
            className="form-control col-md-3"
          />
        </span> 
        <br/>
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
            <button className="btn btn-primary" onClick = {() => this.handleSubmit()}> SignIn </button>
            <button className="btn btn-primary" onClick = {() => this.handleLogin()}> Login </button>
          </div>
      </div>
    );
  }
}

// Fetch Redux state and use as a props in component
const mapStateToProps = (state) => {
    return {
      formData : state.formData
    };
  }

// Define PropTypes
Admin.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default connect(mapStateToProps)(Admin)
