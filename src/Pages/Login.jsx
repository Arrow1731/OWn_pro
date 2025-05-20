import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { auth, provider } from '../Firebase/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    redirectToProfile: false,
    error: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ redirectToProfile: true });
    } catch (error) {
      this.setState({ error: "Login error: " + error.message });
    }
  };

  handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      this.setState({ redirectToProfile: true });
    } catch (error) {
      this.setState({ error: "Google login error: " + error.message });
    }
  };

  render() {
    if (this.state.redirectToProfile) {
      return <Navigate to="/profile" />;
    }

    return (
      <div className='min-h-screen flex justify-center items-center bg-gray-100'>
        <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
          <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Shaxsiy kabinetga kirish</h2>

          <input
            id="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <input
            id="password"
            type="password"
            placeholder="Parol"
            value={this.state.password}
            onChange={this.handleInputChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          {this.state.error && <p className="text-red-500 text-sm mb-4">{this.state.error}</p>}

          <button onClick={this.handleLogin} className='w-full py-3 bg-blue-600 text-white rounded-lg'>
            Tizimga kirish
          </button>

          <button onClick={this.handleGoogleLogin} className='w-full py-3 mt-4 bg-red-500 text-white rounded-lg'>
            Google bilan kirish
          </button>

          <p className="text-sm text-center mt-6">
            Ro'yxatdan o'tmaganmisiz? <Link to="/register" className="text-green-600">Ro'yxatdan o'ting</Link>
          </p>
        </div>
      </div>
    );
  }
}