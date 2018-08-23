import PropTypes from 'prop-types';
import React from 'react';

export default class UserLogin extends React.Component {
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
    var styles= {
      border: '1px solid'   
    }
    return (
      <div>
        <table style={styles}>
          <thead>
            <th>Full Name</th>
            <th> Email</th>
            <th>Password</th>
           </thead>
           <tbody>
            <tr style={styles}>
              <td>
                <span>dsfdsffds
                </span>
              </td>
              <td>
                <span>dsfdsffds
                </span>
              </td>
              <td>
                <span>ffdsfsdf
                </span>
              </td>
            </tr>
           </tbody>
        </table>
      </div>
         )
  }
}
