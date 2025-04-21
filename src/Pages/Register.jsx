import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div className='container'>
                <div className='max-w-[320px] w-full'>
                    <label htmlFor="text">Emailingizni Kiriting</label><br />
                    <input className='w-[320px] p-[8px] rounded-lg' type="email" name="" id="" placeholder='E-mail' /><br />
                    <label htmlFor="text">Parolingizni Kiriting</label><br />
                    <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Password' /><br />
                    <label htmlFor="text">Parolingizni Takroriy Kiriting</label><br />
                    <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Re-Enter Password' /><br />
                    <div className='flex justify-between'>
                        <NavLink to="/login">Log In</NavLink>
                        <NavLink to="/register">Sign Up</NavLink>
                        <button>Google</button>
                    </div>
                </div>
            </div>
        )
    }
}
