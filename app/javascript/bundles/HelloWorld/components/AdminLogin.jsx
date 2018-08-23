import PropTypes from 'prop-types';
import React from 'react';

export default class AdminLogin extends React.Component {
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

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
         <h1>Welcome Admin </h1>
       </div>
    );
  }
}
