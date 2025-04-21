import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className='container'>
        <div className='max-w-[320px] w-full'>
          <div>
            <label htmlFor="text">Emailingizni Kiriting</label><br />
            <input className='w-[320px] p-[8px] rounded-lg' type="email" name="" id="" placeholder='E-mail' /><br />
            <label htmlFor="text">Parolingizni Kiriting</label><br />
            <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Password' /><br />
            <div className='flex justify-between'>
              <button>Log In</button>
              <Link to={'/register'}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
