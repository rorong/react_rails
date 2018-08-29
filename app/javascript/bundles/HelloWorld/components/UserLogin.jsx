import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { show } from '../actions/index'


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
      type: '',
      hide: false
     
    }
  }
 
 componentWillMount() {
  const DATA= JSON.parse(localStorage.getItem("userDetails")).data
  this.setState({email: DATA.email, name : DATA.full_name, type: DATA.type})
  }

 componentWillReceiveProps(nextProp) {
  }
 
 hideShow() {     
  this.setState({hide : !this.state.hide})

 }
 
  showData() {
  }

 logout() {
  localStorage.clear();
  this.props.history.push('/hello_world/')
 }

  render() {
    console.log(this.props,'----------thuis.propoopasd------------')
    const DATA= JSON.parse(localStorage.getItem("userDetails")).data.users
    //console.log(DATA.role,'----------------------- localStorage-------------');
    var styles= {
      border: '1px solid'   
    }
    return (
      <div> 
        <h1 onClick ={() => this.hideShow()} align="center"> {DATA.role == undefined ?  'ADMIN' : 'USER'} </h1>
        <div className="container">
        <button  className="btn btn-primary logout" onClick= {() => this.logout()}> Logout </button>
          {this.state.hide ? DATA.role == undefined ?
            <table className="table" style={styles}>
            <thead className="table-head">
              <th> Full Name </th>
              <th> Email </th>
              <th> Type </th>
              <th> EDIT</th>
             </thead>
             <tbody>
                  <tr style={styles}>
                    <td>
                     <input type="text" value ='gfhfhg'/> 
                    </td>
                    <td>
                      <input type="text" value = 'jgfhfhgf'/>                 
                    </td>
                     <td>
                     <span>  {this.state.type == null ? "User" : this.state.type} </span>
                    </td>
                    <td>
                     <button onClick={() => this.showData()}> EDIT</button>
                    </td>
                  </tr>
                      </tbody>
                 </table>
                 :  ''
              : ''}
        </div>
        <div className="container">
          <table className="table" style={styles}>
            <thead className="table-head">
              <th> Full Name </th>
              <th> Email </th>
              <th> Type </th>
              <th> EDIT</th>
             </thead>
             <tbody>
              {DATA.role == undefined ? DATA.map((data) => (
                  <tr style={styles}>
                    <td>
                     <input type="text" value= {data.full_name}/> 
                    </td>
                    <td>
                      <input type="text" value= {data.email}/>                 
                    </td>
                     <td>
                     <span>  {this.state.type == null ? "User" : this.state.type} </span>
                    </td>
                    <td>
                     <button onClick={() => this.showData()}> EDIT</button>
                    </td>
                  </tr>
                 )) : 
                 <tr style={styles}>
                   <td>
                    <input type="text"  value= {DATA.full_name}/> 
                    </td>
                    <td>
                    <input type="text" value= {DATA.email}/> 
                    </td>
                    <td>
                     <span>  khjkjh </span>
                    </td>
                    <td>
                     <button onClick={() => this.showData()}> EDIT</button>
                    </td>
                    </tr> 
              }
             </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      showData : state
    };
  }

export default connect(mapStateToProps)(UserLogin)