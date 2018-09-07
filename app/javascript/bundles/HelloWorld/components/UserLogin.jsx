import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { login ,update,show } from '../actions/index'
import AddModal from './Modal'

 class UserLogin extends React.Component {
  static propTypes = {
  };
  constructor(props) {
    super(props);
// Define Initial state of the component
    this.state = {
      email : '',
      modal: false,
      password : '',
      loginDir: '',
      type: '',
      hide: false,
      token: ''
     
    }
  }
 
toggle = (value,email) => {
    this.setState({
      modal: !this.state.modal,
      email: email,
      token : value
    });
  }

 componentWillMount() {
     this.setState({email: localStorage.getItem('userEmail'),
      password: localStorage.getItem('userPassword')})
      const OBJ={ 'email': localStorage.getItem('userEmail'),'password':  localStorage.getItem('userPassword')}
      const USER = {'user' : OBJ }
      this.props.dispatch(login(USER))
  }

 componentWillReceiveProps(nextProp) {
  if (this.props.show) {
    if (this.props.show.data.users !== nextProp.show.data.users) {
      this.setState({email: localStorage.getItem('userEmail'),
      password: localStorage.getItem('userPassword')})
      const OBJ={ 'email': localStorage.getItem('userEmail'),'password':  localStorage.getItem('userPassword')}
      const USER = {'user' : OBJ }
      this.props.dispatch(login(USER))
    };
  } else if(this.props.show == '' && nextProp.show.status === 200) {
    this.setState({email: localStorage.getItem('userEmail'),
      password: localStorage.getItem('userPassword')})
      const OBJ={ 'email': localStorage.getItem('userEmail'),'password':  localStorage.getItem('userPassword')}
      const USER = {'user' : OBJ }
      this.props.dispatch(login(USER))
  }
  }
 

 hideShow() {     
  this.setState({hide : !this.state.hide})

 }

// Open and Close Modal
  showData = () => {
     this.setState({modal: !this.state.modal});
  }
 
//Submission of the form
 handleSubmit() {
    const TOKEN = this.state.token;
    const OBJ= {'full_name': this.state.name,'password': this.state.password}
    const USER = {'user' : OBJ }
    this.props.dispatch(show(TOKEN,USER))
    alert("Successfully Updated") 
    this.setState({modal: false})
    this.props.history.push('/hello_world/userlogin')

}

//Handle Logout
 logout() {
    localStorage.clear();
    this.props.history.push('/hello_world/')
 }

// handle event for each property
 eventHandle(value,name) {
    this.setState({ [name]: value})
 }
  
  render() {
    const DATA= this.props.state &&  this.props.state.users;
    var styles= {
      border: '1px solid'   
    }
    return (
     this.props.state ? 
           <div className="user-login"> 
             <h1 onClick ={() => this.hideShow()} align="center"> {DATA.role == undefined ?  'ADMIN' : 'USER'} </h1>
             <div className="container">
             <button  className="btn btn-primary logout" onClick= {() => this.logout()}> Logout </button>
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
                          <input onChange={(value) => this.showData(value)} type="text" value= {data.full_name}  className='field'/> 
                         </td>
                         <td>
     
                           <input type="text" value= {data.email}  className='field'/> 
                         </td>
                          <td>
                          <span>  {data.role } </span>
                         </td>
                         <td>
                          <button onClick={() => this.toggle(data.id,data.email)}> EDIT</button>
                         </td>
                       </tr>
                      )) : 
                      <tr style={styles}>
                        <td>
                         <input type="text"  value= {DATA.full_name}  className='field'/> 
                         </td>
                         <td>
                         <input type="text" value= {DATA.email}  className='field'/> 
                         </td>
                         <td>
                          <span>{ DATA.role} </span>
                         </td>
                         <td>
                          <button onClick={() => this.toggle(DATA.id,DATA.email)}> EDIT</button>
                         </td>
                      </tr> 
                   }
                  </tbody>
               </table>
             </div>
              {
                this.state.modal && <AddModal handleSubmit= {()=> this.handleSubmit()}handleChange = {(value,name) => this.eventHandle(value,name)} isOpen={this.state.modal} email ={this.state.email} toggle={this.toggle}/>
              }
           </div> : 
           <div>Loading...</div>
    )
       
  }
}

// Fetch Redux app state and use as props
const mapStateToProps = (state) => {
    return {
     state : state.LoginReducer.data,
     update : state.UpdateReducer,
     show: state.ShowReducer,
    };
  }

export default connect(mapStateToProps)(UserLogin)
