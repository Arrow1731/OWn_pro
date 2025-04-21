import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className='container'>
                <div>
                    <input type="tel" name="" id="" placeholder='Name' />
                    <input type="password" name="" id="" placeholder='Password' />
                    <button>Log In</button>
                    <Link to={'/register'}>Sign Up</Link>
                </div>
            </div>
        )
    }
}
