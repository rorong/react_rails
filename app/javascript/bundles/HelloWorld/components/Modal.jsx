import React from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';


class AddModal extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      name : '',
      password : ''
    }
  }

  render() {
    const {
      isOpen, toggle,
    } = this.props;

    return (
    
        <Modal  isOpen={isOpen} toggle={toggle} className="Modal-Wrapper" >
          <ModalBody>
           
          <span> Full Name &nbsp;
          <input 
            name="name"
            type="text" 
            onChange ={(e) => this.props.handleChange(e.target.value,'name')}
            className="form-control col-md-3 "
          />
        </span> 
        <br/>
        <span> Email &nbsp;
          <input 
            type="email" 
            value ={this.props.email}
            className="form-control col-md-3"
          />
        </span> 
        <br/>
        <span> Password  &nbsp;
          <input 
            type="text"
            name="password"  
            onChange ={(e) => this.props.handleChange(e.target.value,'password')}
            className="form-control col-md-3" 
          />
        </span>
          </ModalBody>
          <ModalFooter>
           <span className="Modal-btn" align="center">
             <button onClick ={ this.props.handleSubmit} type="submit" className="btn-modal">Save</button>
              <button  onClick={toggle} className="btn-modal">Cancel</button>
            </span>
          </ModalFooter>
        </Modal>
     
    );
  }
}

export default AddModal;