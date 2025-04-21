import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <input type="tel" name="" id="" placeholder='Name'/>
          <input type="password" name="" id="" placeholder='Password'/>
          <button>Log In</button>
          <Link to={'/register'}>Sign Up</Link>
        </div>
      </div>
    )
  }
}
