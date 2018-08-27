import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';
import './globalStyle.css';

 class UserLogin extends React.Component {
  static propTypes = {
   // name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
   
  }
 
 componentWillMount() {

  }

 componentWillReceiveProps(nextProp) {
  }

 logout() {
  localStorage.clear();
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
               <span> Mr Thomas(dumy) </span>
              </td>
              <td>
               <span> Thomas@gmail.com  </span>
              </td>
              <td>
               <span> User </span>
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