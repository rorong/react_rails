
import PropTypes from 'prop-types';
import React from 'react';


export default class User extends React.Component {
  static propTypes = {
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password : '',
      name: ''
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

    if(this.state.name === "") {
      alert("define name")
    }
    else if(this.state.name && this.state.name.length < 4 ) {
      alert("length problem")
    }
    else if(this.state.email === "") {
      alert("email define")
    }
    else if(!EmailValidation.test(this.state.email)) {
      alert("Please fill the correct email!")
    }
    else if(!PwdValidation.test(this.state.password)) {
      alert("Password should be more than 6 characters with letters, numbers, special character")
    }

    else if(State.email != '' && State.name!= '' && State.password != '' ) {
         this.props.history.push('/hello_world/userlogin')
    }
  }

 

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    // console.log(this.props,'ds====================')
    return (
      <div>
        <h1> User </h1>
        <span> Full Name &nbsp;
          <input 
            type="text" 
            onChange={(e) => this.setState({ name: e.target.value})} 
            value={this.state.name}
          />
        </span> 
        <br/>
        <span> Email &nbsp;
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
            value={this.state.passData} 
          />
        </span>
         <br/>
          <button onClick = {() => this.handleSubmit()}> SignIn </button>
           <button onClick = {() => this.handleSubmit()}> Login </button>
      </div>
    );
  }
}
