import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';


 class UserLogin extends React.Component {
  static propTypes = {
  // name: PropTypes.string.isRequired, // this is passed from the Rails view
  };
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      loginDir: '',
      type: ''
     
    }
  }
 
 componentWillMount() {
  const DATA= JSON.parse(localStorage.getItem("userDetails")).data
  this.setState({email: DATA.email, name : DATA.full_name, type: DATA.type})
  }

 componentWillReceiveProps(nextProp) {
  }

 logout() {
  localStorage.clear();
  this.props.history.push('/hello_world/')
 }

  render() {
    var styles= {
      border: '1px solid'   
    }
    return (
      <div className="container">
        <table className="table" style={styles}>
          <thead className="table-head">
            <th> Full Name </th>
            <th> Email </th>
            <th> Type </th>
           </thead>
           <tbody>
            <tr style={styles}>
              <td>
               <span> {this.state.name} </span>
              </td>
              <td>
               <span> {this.state.email} </span>
              </td>
              <td>
               <span>  {this.state.type == null ? "User" : this.state.type} </span>
              </td>
            </tr>
           </tbody>
        </table>
             <button  className="btn btn-primary" onClick= {() => this.logout()}> Logout </button>
      </div>
    )
  }
}


function mapStateToProps({ LoginReducer  }) {
  return {
    LoginReducer
  };
}
export default connect(mapStateToProps, actions)(UserLogin);