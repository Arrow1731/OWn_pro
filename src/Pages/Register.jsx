// // // // // // // // // // // import React, { Component } from 'react'
// // // // // // // // // // // import { NavLink } from 'react-router-dom'

// // // // // // // // // // // export default class Register extends Component {
// // // // // // // // // // //     render() {
// // // // // // // // // // //         return (
// // // // // // // // // // //             <div className='container'>
// // // // // // // // // // //                 <div className='max-w-[320px] w-full'>
// // // // // // // // // // //                     <label htmlFor="text">Emailingizni Kiriting</label><br />
// // // // // // // // // // //                     <input className='w-[320px] p-[8px] rounded-lg' type="email" name="" id="" placeholder='E-mail' /><br />
// // // // // // // // // // //                     <label htmlFor="text">Parolingizni Kiriting</label><br />
// // // // // // // // // // //                     <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Password' /><br />
// // // // // // // // // // //                     <label htmlFor="text">Parolingizni Takroriy Kiriting</label><br />
// // // // // // // // // // //                     <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Re-Enter Password' /><br />
// // // // // // // // // // //                     <div className='flex justify-between'>
// // // // // // // // // // //                         <NavLink to="/login">Log In</NavLink>
// // // // // // // // // // //                         <NavLink to="/register">Sign Up</NavLink>
// // // // // // // // // // //                         <button>Google</button>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //         )
// // // // // // // // // // //     }
// // // // // // // // // // // }



// // // // // // // // // // import React, { Component } from 'react';
// // // // // // // // // // import { NavLink } from 'react-router-dom';
// // // // // // // // // // import { auth, provider } from '../Firebase/firebase';
// // // // // // // // // // import { signInWithPopup } from 'firebase/auth';

// // // // // // // // // // export default class Register extends Component {
// // // // // // // // // //   handleGoogleSignUp = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const result = await signInWithPopup(auth, provider);
// // // // // // // // // //       const user = result.user;
// // // // // // // // // //       console.log("Google registered user:", user);
// // // // // // // // // //       // You can save user info or redirect here
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Google Sign-Up Error:", error);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   render() {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className='container'>
// // // // // // // // // //         <div className='max-w-[320px] w-full'>
// // // // // // // // // //           <label htmlFor="email">Emailingizni Kiriting</label><br />
// // // // // // // // // //           <input className='w-[320px] p-[8px] rounded-lg' type="email" id="email" placeholder='E-mail' /><br />

// // // // // // // // // //           <label htmlFor="password">Parolingizni Kiriting</label><br />
// // // // // // // // // //           <input className='w-[320px] p-[8px] rounded-lg' type="password" id="password" placeholder='Password' /><br />

// // // // // // // // // //           <label htmlFor="re-password">Parolingizni Takroriy Kiriting</label><br />
// // // // // // // // // //           <input className='w-[320px] p-[8px] rounded-lg' type="password" id="re-password" placeholder='Re-Enter Password' /><br />

// // // // // // // // // //           <div className='flex justify-between mt-2 items-center'>
// // // // // // // // // //             <NavLink to="/login">Log In</NavLink>
// // // // // // // // // //             {/* <NavLink to="/register">Sign Up</NavLink> */}
// // // // // // // // // //             <button onClick={this.handleGoogleSignUp}className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition">Sign Up with Google</button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }
// // // // // // // // // // }


// // // // // // // // // // import React, { Component } from 'react'
// // // // // // // // // // import { NavLink } from 'react-router-dom'
// // // // // // // // // // import { auth, provider } from '../Firebase/firebase'
// // // // // // // // // // import { signInWithPopup } from 'firebase/auth'

// // // // // // // // // // export default class Register extends Component {
// // // // // // // // // //   handleGoogleSignUp = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const result = await signInWithPopup(auth, provider)
// // // // // // // // // //       const user = result.user
// // // // // // // // // //       console.log("Google registered user:", user)
// // // // // // // // // //       // Optional: Redirect or save user to backend here
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Google Sign-Up Error:", error)
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   render() {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className='container flex justify-center items-center h-screen'>
// // // // // // // // // //         <div className='max-w-[320px] w-full p-4 border rounded-lg shadow-md'>
// // // // // // // // // //           <label htmlFor="email">Emailingizni Kiriting</label><br />
// // // // // // // // // //           <input className='w-full p-2 mb-2 rounded-lg border' type="email" id="email" placeholder='E-mail' /><br />

// // // // // // // // // //           <label htmlFor="password">Parolingizni Kiriting</label><br />
// // // // // // // // // //           <input className='w-full p-2 mb-2 rounded-lg border' type="password" id="password" placeholder='Password' /><br />

// // // // // // // // // //           <label htmlFor="re-password">Parolingizni Takroriy Kiriting</label><br />
// // // // // // // // // //           <input className='w-full p-2 mb-4 rounded-lg border' type="password" id="re-password" placeholder='Re-Enter Password' /><br />

// // // // // // // // // //           <div className='flex justify-between items-center mb-4'>
// // // // // // // // // //             <NavLink to="/login" className="text-blue-600">Log In</NavLink>
// // // // // // // // // //             {/* <NavLink to="/register">Sign Up</NavLink> */}
// // // // // // // // // //           </div>

// // // // // // // // // //           <button
// // // // // // // // // //             onClick={this.handleGoogleSignUp}
// // // // // // // // // //             className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
// // // // // // // // // //           >
// // // // // // // // // //             Sign Up with Google
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     )
// // // // // // // // // //   }
// // // // // // // // // // }





// // // // // // // // // import React, { Component } from 'react';
// // // // // // // // // import { NavLink } from 'react-router-dom';
// // // // // // // // // import { auth, provider } from '../Firebase/firebase';
// // // // // // // // // import { signInWithPopup } from 'firebase/auth';

// // // // // // // // // export default class Register extends Component {
// // // // // // // // //   handleGoogleSignUp = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const result = await signInWithPopup(auth, provider);
// // // // // // // // //       const user = result.user;
// // // // // // // // //       console.log("Google registered user:", user);
// // // // // // // // //       // Optional: Redirect or save user to backend here
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Google Sign-Up Error:", error);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   render() {
// // // // // // // // //     return (
// // // // // // // // //       <div className='min-h-screen flex justify-center items-center bg-gray-100'>
// // // // // // // // //         <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
// // // // // // // // //           <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Create an Account</h2>

// // // // // // // // //           {/* Email Input */}
// // // // // // // // //           <div className='mb-4'>
// // // // // // // // //             <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
// // // // // // // // //             <input
// // // // // // // // //               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // // // //               type="email"
// // // // // // // // //               id="email"
// // // // // // // // //               placeholder='Enter your email'
// // // // // // // // //               required
// // // // // // // // //             />
// // // // // // // // //           </div>

// // // // // // // // //           {/* Password Input */}
// // // // // // // // //           <div className='mb-4'>
// // // // // // // // //             <label htmlFor="password" className='block text-lg font-semibold'>Password</label>
// // // // // // // // //             <input
// // // // // // // // //               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // // // //               type="password"
// // // // // // // // //               id="password"
// // // // // // // // //               placeholder='Enter your password'
// // // // // // // // //               required
// // // // // // // // //             />
// // // // // // // // //           </div>

// // // // // // // // //           {/* Re-enter Password Input */}
// // // // // // // // //           <div className='mb-6'>
// // // // // // // // //             <label htmlFor="re-password" className='block text-lg font-semibold'>Re-enter Password</label>
// // // // // // // // //             <input
// // // // // // // // //               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // // // //               type="password"
// // // // // // // // //               id="re-password"
// // // // // // // // //               placeholder='Re-enter your password'
// // // // // // // // //               required
// // // // // // // // //             />
// // // // // // // // //           </div>

// // // // // // // // //           {/* Login Link */}
// // // // // // // // //           <div className='flex justify-between items-center mb-4'>
// // // // // // // // //             <NavLink to="/login" className="text-blue-600">Already have an account? Log In</NavLink>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Sign-Up Button */}
// // // // // // // // //           <button
// // // // // // // // //             onClick={this.handleGoogleSignUp}
// // // // // // // // //             className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
// // // // // // // // //           >
// // // // // // // // //             Sign Up with Google
// // // // // // // // //           </button>

// // // // // // // // //           {/* Or alternative method */}
// // // // // // // // //           <div className='mt-4 text-center'>
// // // // // // // // //             <p className='text-sm'>Or, sign up with your email</p>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   }
// // // // // // // // // }










// // // // // // // // // import React, { Component } from 'react';
// // // // // // // // // import { NavLink } from 'react-router-dom';
// // // // // // // // // import { auth, provider } from '../Firebase/firebase';
// // // // // // // // // import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

// // // // // // // // // export default class Register extends Component {
// // // // // // // // //   state = {
// // // // // // // // //     email: '',
// // // // // // // // //     password: '',
// // // // // // // // //     confirmPassword: '',
// // // // // // // // //     error: '',
// // // // // // // // //   };

// // // // // // // // //   handleInputChange = (e) => {
// // // // // // // // //     this.setState({ [e.target.name]: e.target.value });
// // // // // // // // //   };

// // // // // // // // //   handleGoogleSignUp = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const result = await signInWithPopup(auth, provider);
// // // // // // // // //       const user = result.user;
// // // // // // // // //       console.log("Google registered user:", user);
// // // // // // // // //       // Optional: Redirect or save user to backend here
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Google Sign-Up Error:", error);
// // // // // // // // //       this.setState({ error: error.message });
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   handleEmailSignUp = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     const { email, password, confirmPassword } = this.state;

// // // // // // // // //     if (password !== confirmPassword) {
// // // // // // // // //       this.setState({ error: "Passwords do not match!" });
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     try {
// // // // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // // // //       const user = userCredential.user;
// // // // // // // // //       console.log("Email registered user:", user);
// // // // // // // // //       // Optional: Redirect or save user to backend here
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Email Sign-Up Error:", error);
// // // // // // // // //       this.setState({ error: error.message });
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   render() {
// // // // // // // // //     const { email, password, confirmPassword, error } = this.state;

// // // // // // // // //     return (
// // // // // // // // //       <div className='min-h-screen flex justify-center items-center bg-gray-100'>
// // // // // // // // //         <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
// // // // // // // // //           <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Create an Account</h2>

// // // // // // // // //           {/* Email and Password Form */}
// // // // // // // // //           <form onSubmit={this.handleEmailSignUp}>
// // // // // // // // //             <div className='mb-4'>
// // // // // // // // //               <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
// // // // // // // // //               <input
// // // // // // // // //                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // // // //                 type="email"
// // // // // // // // //                 id="email"
// // // // // // // // //                 name="email"
// // // // // // // // //                 value={email}
// // // // // // // // //                 onChange={this.handleInputChange}
// // // // // // // // //                 placeholder='Enter your email'
// // // // // // // // //                 required
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             <div className='mb-4'>
// // // // // // // // //               <label htmlFor="password" className='block text-lg font-semibold'>Password</label>
// // // // // // // // //               <input
// // // // // // // // //                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // // // //                 type="password"
// // // // // // // // //                 id="password"
// // // // // // // // //                 name="password"
// // // // // // // // //                 value={password}
// // // // // // // // //                 onChange={this.handleInputChange}
// // // // // // // // //                 placeholder='Enter your password'
// // // // // // // // //                 required
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             <div className='mb-6'>
// // // // // // // // //               <label htmlFor="confirmPassword" className='block text-lg font-semibold'>Confirm Password</label>
// // // // // // // // //               <input
// // // // // // // // //                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // // // //                 type="password"
// // // // // // // // //                 id="confirmPassword"
// // // // // // // // //                 name="confirmPassword"
// // // // // // // // //                 value={confirmPassword}
// // // // // // // // //                 onChange={this.handleInputChange}
// // // // // // // // //                 placeholder='Re-enter your password'
// // // // // // // // //                 required
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             {/* Error Message */}
// // // // // // // // //             {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

// // // // // // // // //             {/* Sign-Up Button */}
// // // // // // // // //             <button
// // // // // // // // //               type="submit"
// // // // // // // // //               className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
// // // // // // // // //             >
// // // // // // // // //               Sign Up with Email
// // // // // // // // //             </button>
// // // // // // // // //           </form>

// // // // // // // // //           {/* Login Link */}
// // // // // // // // //           <div className='flex justify-between items-center mb-4 mt-6'>
// // // // // // // // //             <NavLink to="/login" className="text-blue-600">Already have an account? Log In</NavLink>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Google Sign-Up Button */}
// // // // // // // // //           <button
// // // // // // // // //             onClick={this.handleGoogleSignUp}
// // // // // // // // //             className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mt-4"
// // // // // // // // //           >
// // // // // // // // //             Sign Up with Google
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   }
// // // // // // // // // }










// // // // // // // // import React, { Component } from 'react';
// // // // // // // // import { NavLink } from 'react-router-dom';
// // // // // // // // import { auth, provider, db } from '../Firebase/firebase';
// // // // // // // // import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// // // // // // // // import { doc, setDoc } from 'firebase/firestore';

// // // // // // // // export default class Register extends Component {
// // // // // // // //   state = {
// // // // // // // //     email: '',
// // // // // // // //     password: '',
// // // // // // // //     confirmPassword: '',
// // // // // // // //     role: 'student',
// // // // // // // //     error: '',
// // // // // // // //   };

// // // // // // // //   handleInputChange = (e) => {
// // // // // // // //     this.setState({ [e.target.name]: e.target.value });
// // // // // // // //   };

// // // // // // // //   saveUserToFirestore = async (user, role, email) => {
// // // // // // // //     try {
// // // // // // // //       await setDoc(doc(db, 'users', user.uid), {
// // // // // // // //         uid: user.uid,
// // // // // // // //         email,
// // // // // // // //         role,
// // // // // // // //         createdAt: new Date(),
// // // // // // // //       });
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error('Firestore Error:', err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   handleGoogleSignUp = async () => {
// // // // // // // //     try {
// // // // // // // //       const result = await signInWithPopup(auth, provider);
// // // // // // // //       const user = result.user;
// // // // // // // //       console.log('Google registered user:', user);
// // // // // // // //       await this.saveUserToFirestore(user, this.state.role, user.email);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Google Sign-Up Error:', error);
// // // // // // // //       this.setState({ error: error.message });
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   handleEmailSignUp = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     const { email, password, confirmPassword, role } = this.state;

// // // // // // // //     if (password !== confirmPassword) {
// // // // // // // //       this.setState({ error: 'Passwords do not match!' });
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // // //       const user = userCredential.user;
// // // // // // // //       console.log('Email registered user:', user);
// // // // // // // //       await this.saveUserToFirestore(user, role, email);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Email Sign-Up Error:', error);
// // // // // // // //       this.setState({ error: error.message });
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   render() {
// // // // // // // //     const { email, password, confirmPassword, role, error } = this.state;

// // // // // // // //     return (
// // // // // // // //       <div className='min-h-screen flex justify-center items-center bg-gray-100'>
// // // // // // // //         <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
// // // // // // // //           <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Hisob yaratish</h2>

// // // // // // // //           <form onSubmit={this.handleEmailSignUp}>
// // // // // // // //             <div className='mb-4'>
// // // // // // // //               <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
// // // // // // // //               <input
// // // // // // // //                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // // //                 type="email"
// // // // // // // //                 id="email"
// // // // // // // //                 name="email"
// // // // // // // //                 value={email}
// // // // // // // //                 onChange={this.handleInputChange}
// // // // // // // //                 placeholder='Emailingizni kiriting'
// // // // // // // //                 required
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             <div className='mb-4'>
// // // // // // // //               <label htmlFor="password" className='block text-lg font-semibold'>Parol</label>
// // // // // // // //               <input
// // // // // // // //                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // // //                 type="password"
// // // // // // // //                 id="password"
// // // // // // // //                 name="password"
// // // // // // // //                 value={password}
// // // // // // // //                 onChange={this.handleInputChange}
// // // // // // // //                 placeholder='Parolingizni kiriting'
// // // // // // // //                 required
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             <div className='mb-4'>
// // // // // // // //               <label htmlFor="confirmPassword" className='block text-lg font-semibold'>Parolni tastiqlang</label>
// // // // // // // //               <input
// // // // // // // //                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // // //                 type="password"
// // // // // // // //                 id="confirmPassword"
// // // // // // // //                 name="confirmPassword"
// // // // // // // //                 value={confirmPassword}
// // // // // // // //                 onChange={this.handleInputChange}
// // // // // // // //                 placeholder='Parolni qayta kiriting'
// // // // // // // //                 required
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             <div className='mb-6'>
// // // // // // // //               <label htmlFor="role" className='block text-lg font-semibold'>Tanlang</label>
// // // // // // // //               <select
// // // // // // // //                 id="role"
// // // // // // // //                 name="role"
// // // // // // // //                 value={role}
// // // // // // // //                 onChange={this.handleInputChange}
// // // // // // // //                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // // //                 required
// // // // // // // //               >
// // // // // // // //                 <option value="student">O'quvchi</option>
// // // // // // // //                 <option value="teacher">O'qituvchi</option>
// // // // // // // //               </select>
// // // // // // // //             </div>

// // // // // // // //             {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

// // // // // // // //             <button
// // // // // // // //               type="submit"
// // // // // // // //               className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
// // // // // // // //             >
// // // // // // // //               Email bilan ro'yxatdan o'tish
// // // // // // // //             </button>
// // // // // // // //           </form>

// // // // // // // //           <div className='flex justify-between items-center mb-4 mt-6'>
// // // // // // // //             <NavLink to="/login" className="text-blue-600">Profilingiz bormi? Tizimga kirish</NavLink>
// // // // // // // //           </div>

// // // // // // // //           <button
// // // // // // // //             onClick={this.handleGoogleSignUp}
// // // // // // // //             className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mt-4"
// // // // // // // //           >
// // // // // // // //             Google bilan ro'yxatdan o'tish
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }
// // // // // // // // }























































// // // // // // // import React, { useState } from 'react';
// // // // // // // import { NavLink, useNavigate } from 'react-router-dom';
// // // // // // // import { auth, provider, db } from '../Firebase/firebase';
// // // // // // // import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// // // // // // // import { doc, setDoc } from 'firebase/firestore';

// // // // // // // function Register() {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const [email, setEmail] = useState('');
// // // // // // //   const [password, setPassword] = useState('');
// // // // // // //   const [confirmPassword, setConfirmPassword] = useState('');
// // // // // // //   const [role, setRole] = useState('student');
// // // // // // //   const [error, setError] = useState('');

// // // // // // //   const saveUserToFirestore = async (user, role, email) => {
// // // // // // //     try {
// // // // // // //       await setDoc(doc(db, 'users', user.uid), {
// // // // // // //         uid: user.uid,
// // // // // // //         email,
// // // // // // //         role,
// // // // // // //         createdAt: new Date(),
// // // // // // //       });
// // // // // // //     } catch (err) {
// // // // // // //       console.error('Firestore Error:', err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleGoogleSignUp = async () => {
// // // // // // //     try {
// // // // // // //       const result = await signInWithPopup(auth, provider);
// // // // // // //       const user = result.user;
// // // // // // //       console.log('Google registered user:', user);

// // // // // // //       await saveUserToFirestore(user, role, user.email);
// // // // // // //       localStorage.setItem("user", JSON.stringify(user));
// // // // // // //       navigate('/profile');
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Google Sign-Up Error:', error);
// // // // // // //       setError(error.message);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleEmailSignUp = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (password !== confirmPassword) {
// // // // // // //       setError('Parollar bir xil emas!');
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // //       const user = userCredential.user;
// // // // // // //       console.log('Email registered user:', user);

// // // // // // //       await saveUserToFirestore(user, role, email);
// // // // // // //       localStorage.setItem("user", JSON.stringify(user));
// // // // // // //       navigate('/profile');
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Email Sign-Up Error:', error);
// // // // // // //       setError(error.message);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className='min-h-screen flex justify-center items-center bg-gray-100'>
// // // // // // //       <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
// // // // // // //         <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Hisob yaratish</h2>

// // // // // // //         <form onSubmit={handleEmailSignUp}>
// // // // // // //           <div className='mb-4'>
// // // // // // //             <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
// // // // // // //             <input
// // // // // // //               type="email"
// // // // // // //               id="email"
// // // // // // //               name="email"
// // // // // // //               value={email}
// // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // //               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // //               placeholder='Emailingizni kiriting'
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className='mb-4'>
// // // // // // //             <label htmlFor="password" className='block text-lg font-semibold'>Parol</label>
// // // // // // //             <input
// // // // // // //               type="password"
// // // // // // //               id="password"
// // // // // // //               name="password"
// // // // // // //               value={password}
// // // // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // // // //               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // //               placeholder='Parolingizni kiriting'
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className='mb-4'>
// // // // // // //             <label htmlFor="confirmPassword" className='block text-lg font-semibold'>Parolni tastiqlang</label>
// // // // // // //             <input
// // // // // // //               type="password"
// // // // // // //               id="confirmPassword"
// // // // // // //               name="confirmPassword"
// // // // // // //               value={confirmPassword}
// // // // // // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // // // // // //               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // //               placeholder='Parolni qayta kiriting'
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className='mb-6'>
// // // // // // //             <label htmlFor="role" className='block text-lg font-semibold'>Tanlang</label>
// // // // // // //             <select
// // // // // // //               id="role"
// // // // // // //               name="role"
// // // // // // //               value={role}
// // // // // // //               onChange={(e) => setRole(e.target.value)}
// // // // // // //               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // // // // //               required
// // // // // // //             >
// // // // // // //               <option value="student">O'quvchi</option>
// // // // // // //               <option value="teacher">O'qituvchi</option>
// // // // // // //             </select>
// // // // // // //           </div>

// // // // // // //           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

// // // // // // //           <button
// // // // // // //             type="submit"
// // // // // // //             className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
// // // // // // //           >
// // // // // // //             Email bilan ro'yxatdan o'tish
// // // // // // //           </button>
// // // // // // //         </form>

// // // // // // //         <div className='flex justify-between items-center mb-4 mt-6'>
// // // // // // //           <NavLink to="/login" className="text-blue-600">Profilingiz bormi? Tizimga kirish</NavLink>
// // // // // // //         </div>

// // // // // // //         <button
// // // // // // //           onClick={handleGoogleSignUp}
// // // // // // //           className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mt-4"
// // // // // // //         >
// // // // // // //           Google bilan ro'yxatdan o'tish
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Register;








































// // // // // // import React, { Component } from 'react';
// // // // // // import { NavLink } from 'react-router-dom';
// // // // // // import { auth, provider, db } from '../Firebase/firebase';
// // // // // // import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// // // // // // import { doc, setDoc } from 'firebase/firestore';

// // // // // // export default class Register extends Component {
// // // // // //   state = {
// // // // // //     email: '',
// // // // // //     password: '',
// // // // // //     confirmPassword: '',
// // // // // //     role: 'student',
// // // // // //     name: '',
// // // // // //     nickname: '',
// // // // // //     age: '',
// // // // // //     grade: '',
// // // // // //     error: '',
// // // // // //   };

// // // // // //   handleInputChange = (e) => {
// // // // // //     this.setState({ [e.target.name]: e.target.value });
// // // // // //   };

// // // // // //   saveUserToFirestore = async (user, data) => {
// // // // // //     try {
// // // // // //       await setDoc(doc(db, 'users', user.uid), {
// // // // // //         uid: user.uid,
// // // // // //         email: data.email,
// // // // // //         role: data.role,
// // // // // //         name: data.name,
// // // // // //         nickname: data.nickname,
// // // // // //         age: data.age,
// // // // // //         grade: data.grade,
// // // // // //         createdAt: new Date(),
// // // // // //       });
// // // // // //     } catch (err) {
// // // // // //       console.error('Firestore Error:', err);
// // // // // //     }
// // // // // //   };

// // // // // //   handleGoogleSignUp = async () => {
// // // // // //     try {
// // // // // //       const result = await signInWithPopup(auth, provider);
// // // // // //       const user = result.user;
// // // // // //       console.log('Google registered user:', user);
// // // // // //       await this.saveUserToFirestore(user, this.state);
// // // // // //     } catch (error) {
// // // // // //       console.error('Google Sign-Up Error:', error);
// // // // // //       this.setState({ error: error.message });
// // // // // //     }
// // // // // //   };

// // // // // //   handleEmailSignUp = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     const { email, password, confirmPassword } = this.state;

// // // // // //     if (password !== confirmPassword) {
// // // // // //       this.setState({ error: 'Passwords do not match!' });
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // //       const user = userCredential.user;
// // // // // //       console.log('Email registered user:', user);
// // // // // //       await this.saveUserToFirestore(user, this.state);
// // // // // //     } catch (error) {
// // // // // //       console.error('Email Sign-Up Error:', error);
// // // // // //       this.setState({ error: error.message });
// // // // // //     }
// // // // // //   };

// // // // // //   render() {
// // // // // //     const {
// // // // // //       email, password, confirmPassword, role,
// // // // // //       name, nickname, age, grade, error
// // // // // //     } = this.state;

// // // // // //     return (
// // // // // //       <div className='min-h-screen flex justify-center items-center bg-gray-100'>
// // // // // //         <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
// // // // // //           <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Hisob yaratish</h2>

// // // // // //           <form onSubmit={this.handleEmailSignUp}>
// // // // // //             {/* Name */}
// // // // // //             <div className='mb-4'>
// // // // // //               <label htmlFor="name" className='block text-lg font-semibold'>Ism (to‘liq)</label>
// // // // // //               <input
// // // // // //                 className='w-full p-3 mt-2 border rounded-lg'
// // // // // //                 type="text"
// // // // // //                 id="name"
// // // // // //                 name="name"
// // // // // //                 value={name}
// // // // // //                 onChange={this.handleInputChange}
// // // // // //                 placeholder="To‘liq ismingiz"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Nickname */}
// // // // // //             <div className='mb-4'>
// // // // // //               <label htmlFor="nickname" className='block text-lg font-semibold'>Taxallus (nickname)</label>
// // // // // //               <input
// // // // // //                 className='w-full p-3 mt-2 border rounded-lg'
// // // // // //                 type="text"
// // // // // //                 id="nickname"
// // // // // //                 name="nickname"
// // // // // //                 value={nickname}
// // // // // //                 onChange={this.handleInputChange}
// // // // // //                 placeholder="Taxallusingiz"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Age */}
// // // // // //             <div className='mb-4'>
// // // // // //               <label htmlFor="age" className='block text-lg font-semibold'>Yosh</label>
// // // // // //               <input
// // // // // //                 className='w-full p-3 mt-2 border rounded-lg'
// // // // // //                 type="number"
// // // // // //                 id="age"
// // // // // //                 name="age"
// // // // // //                 value={age}
// // // // // //                 onChange={this.handleInputChange}
// // // // // //                 placeholder="Yoshingiz"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Grade */}
// // // // // //             <div className='mb-4'>
// // // // // //               <label htmlFor="grade" className='block text-lg font-semibold'>Sinf yoki kurs</label>
// // // // // //               <input
// // // // // //                 className='w-full p-3 mt-2 border rounded-lg'
// // // // // //                 type="text"
// // // // // //                 id="grade"
// // // // // //                 name="grade"
// // // // // //                 value={grade}
// // // // // //                 onChange={this.handleInputChange}
// // // // // //                 placeholder="Masalan: 10-sinf yoki 2-kurs"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Email */}
// // // // // //             <div className='mb-4'>
// // // // // //               <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
// // // // // //               <input
// // // // // //                 className='w-full p-3 mt-2 border rounded-lg'
// // // // // //                 type="email"
// // // // // //                 id="email"
// // // // // //                 name="email"
// // // // // //                 value={email}
// // // // // //                 onChange={this.handleInputChange}
// // // // // //                 placeholder="Emailingiz"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Password */}
// // // // // //             <div className='mb-4'>
// // // // // //               <label htmlFor="password" className='block text-lg font-semibold'>Parol</label>
// // // // // //               <input
// // // // // //                 className='w-full p-3 mt-2 border rounded-lg'
// // // // // //                 type="password"
// // // // // //                 id="password"
// // // // // //                 name="password"
// // // // // //                 value={password}
// // // // // //                 onChange={this.handleInputChange}
// // // // // //                 placeholder="Parolingiz"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Confirm Password */}
// // // // // //             <div className='mb-4'>
// // // // // //               <label htmlFor="confirmPassword" className='block text-lg font-semibold'>Parolni tasdiqlang</label>
// // // // // //               <input
// // // // // //                 className='w-full p-3 mt-2 border rounded-lg'
// // // // // //                 type="password"
// // // // // //                 id="confirmPassword"
// // // // // //                 name="confirmPassword"
// // // // // //                 value={confirmPassword}
// // // // // //                 onChange={this.handleInputChange}
// // // // // //                 placeholder="Parolni qayta kiriting"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Role */}
// // // // // //             <div className='mb-4'>
// // // // // //               <label htmlFor="role" className='block text-lg font-semibold'>Rolingiz</label>
// // // // // //               <select
// // // // // //                 className='w-full p-3 mt-2 border rounded-lg'
// // // // // //                 id="role"
// // // // // //                 name="role"
// // // // // //                 value={role}
// // // // // //                 onChange={this.handleInputChange}
// // // // // //               >
// // // // // //                 <option value="student">O'quvchi</option>
// // // // // //                 <option value="teacher">O'qituvchi</option>
// // // // // //               </select>
// // // // // //             </div>

// // // // // //             {error && <p className="text-red-500 mb-4">{error}</p>}

// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
// // // // // //             >
// // // // // //               Email orqali ro‘yxatdan o‘tish
// // // // // //             </button>
// // // // // //           </form>

// // // // // //           <div className='flex justify-between items-center mb-4 mt-6'>
// // // // // //             <NavLink to="/login" className="text-blue-600">Tizimda ro‘yxatdan o‘tganmisiz? Kirish</NavLink>
// // // // // //           </div>

// // // // // //           <button
// // // // // //             onClick={this.handleGoogleSignUp}
// // // // // //             className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mt-4"
// // // // // //           >
// // // // // //             Google orqali ro‘yxatdan o‘tish
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }
// // // // // // }






































// // // // // import React, { useState } from 'react';
// // // // // import { auth, db } from '../Firebase/firebase';
// // // // // import { createUserWithEmailAndPassword } from 'firebase/auth';
// // // // // import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // const Register = () => {
// // // // //   const [form, setForm] = useState({
// // // // //     email: '',
// // // // //     password: '',
// // // // //     fullName: '',
// // // // //     nickname: '',
// // // // //     age: '',
// // // // //     grade: '',
// // // // //     role: 'student', // default
// // // // //   });

// // // // //   const navigate = useNavigate();

// // // // //   const handleChange = (e) => {
// // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handleRegister = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
// // // // //       const user = userCredential.user;

// // // // //       // Save user data to Firestore
// // // // //       await setDoc(doc(db, 'users', user.uid), {
// // // // //         uid: user.uid,
// // // // //         email: form.email,
// // // // //         fullName: form.fullName,
// // // // //         nickname: form.nickname,
// // // // //         age: form.age,
// // // // //         grade: form.grade,
// // // // //         role: form.role,
// // // // //         createdAt: serverTimestamp()
// // // // //       });

// // // // //       navigate('/profile'); // ✅ Redirect to profile page
// // // // //     } catch (error) {
// // // // //       console.error("Registration error:", error.message);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // // // //       <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
// // // // //         <h2 className="text-2xl font-bold mb-4 text-center">Ro'yxatdan o'tish</h2>

// // // // //         <input type="text" name="fullName" placeholder="To'liq ismingiz" className="input" onChange={handleChange} required />
// // // // //         <input type="text" name="nickname" placeholder="Taxallusingiz" className="input" onChange={handleChange} required />
// // // // //         <input type="number" name="age" placeholder="Yoshingiz" className="input" onChange={handleChange} required />
// // // // //         <input type="text" name="grade" placeholder="Sinfingiz" className="input" onChange={handleChange} required />
// // // // //         <input type="email" name="email" placeholder="Email" className="input" onChange={handleChange} required />
// // // // //         <input type="password" name="password" placeholder="Parol" className="input" onChange={handleChange} required />

// // // // //         <select name="role" className="input" onChange={handleChange}>
// // // // //           <option value="student">O'quvchi</option>
// // // // //           <option value="teacher">O'qituvchi</option>
// // // // //         </select>

// // // // //         <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
// // // // //           Ro'yxatdan o'tish
// // // // //         </button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Register;


































// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { auth, db } from '../Firebase/firebase';
// // // // import { createUserWithEmailAndPassword } from 'firebase/auth';
// // // // import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

// // // // const Register = () => {
// // // //   const [form, setForm] = useState({
// // // //     fullName: '',
// // // //     nickname: '',
// // // //     age: '',
// // // //     grade: '',
// // // //     email: '',
// // // //     password: '',
// // // //     role: 'student', // or 'teacher'
// // // //   });
// // // //   const navigate = useNavigate();

// // // //   const handleChange = (e) => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleRegister = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
// // // //       const user = userCredential.user;

// // // //       await setDoc(doc(db, "users", user.uid), {
// // // //         ...form,
// // // //         uid: user.uid,
// // // //         createdAt: serverTimestamp(),
// // // //       });

// // // //       navigate('/profile');
// // // //     } catch (error) {
// // // //       alert("Ro'yxatdan o'tishda xatolik: " + error.message);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className='min-h-screen flex justify-center items-center bg-gray-100'>
// // // //       <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
// // // //         <h2 className='text-3xl font-bold text-center mb-6 text-green-600'>Ro'yxatdan o'tish</h2>

// // // //         <form onSubmit={handleRegister} className="space-y-4">
// // // //           {[
// // // //             { label: 'To‘liq ism', name: 'fullName', type: 'text' },
// // // //             { label: 'Taxallus (nickname)', name: 'nickname', type: 'text' },
// // // //             { label: 'Yosh', name: 'age', type: 'number' },
// // // //             { label: 'Sinf', name: 'grade', type: 'text' },
// // // //             { label: 'Email', name: 'email', type: 'email' },
// // // //             { label: 'Parol', name: 'password', type: 'password' },
// // // //           ].map((field) => (
// // // //             <div key={field.name}>
// // // //               <label htmlFor={field.name} className='block text-lg font-semibold'>
// // // //                 {field.label}
// // // //               </label>
// // // //               <input
// // // //                 id={field.name}
// // // //                 name={field.name}
// // // //                 type={field.type}
// // // //                 value={form[field.name]}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
// // // //               />
// // // //             </div>
// // // //           ))}

// // // //           <div className="mt-4">
// // // //             <label className="block text-lg font-semibold mb-1">Rolni tanlang</label>
// // // //             <select
// // // //               name="role"
// // // //               value={form.role}
// // // //               onChange={handleChange}
// // // //               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
// // // //             >
// // // //               <option value="student">O'quvchi</option>
// // // //               <option value="teacher">O'qituvchi</option>
// // // //             </select>
// // // //           </div>

// // // //           <button
// // // //             type="submit"
// // // //             className='w-full py-3 mt-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'
// // // //           >
// // // //             Ro'yxatdan o'tish
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Register;






















// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { auth, db } from '../Firebase/firebase';
// // // import { createUserWithEmailAndPassword } from 'firebase/auth';
// // // import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

// // // const Register = () => {
// // //   const [form, setForm] = useState({
// // //     fullName: '',
// // //     nickname: '',
// // //     age: '',
// // //     grade: '',
// // //     email: '',
// // //     password: '',
// // //     role: 'student', // or 'teacher'
// // //   });
// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleRegister = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
// // //       const user = userCredential.user;

// // //       await setDoc(doc(db, "users", user.uid), {
// // //         ...form,
// // //         uid: user.uid,
// // //         createdAt: serverTimestamp(),
// // //       });

// // //       navigate('/profile');
// // //     } catch (error) {
// // //       alert("Ro'yxatdan o'tishda xatolik: " + error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className='min-h-screen flex justify-center items-center bg-gray-100'>
// // //       <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
// // //         <h2 className='text-3xl font-bold text-center mb-6 text-green-600'>Ro'yxatdan o'tish</h2>

// // //         <form onSubmit={handleRegister} className="space-y-4">
// // //           {[
// // //             { label: 'To‘liq ism', name: 'fullName', type: 'text' },
// // //             { label: 'Taxallus (nickname)', name: 'nickname', type: 'text' },
// // //             { label: 'Yosh', name: 'age', type: 'number' },
// // //             { label: 'Sinf', name: 'grade', type: 'text' },
// // //             { label: 'Email', name: 'email', type: 'email' },
// // //             { label: 'Parol', name: 'password', type: 'password' },
// // //           ].map((field) => (
// // //             <div key={field.name}>
// // //               <label htmlFor={field.name} className='block text-lg font-semibold'>
// // //                 {field.label}
// // //               </label>
// // //               <input
// // //                 id={field.name}
// // //                 name={field.name}
// // //                 type={field.type}
// // //                 value={form[field.name]}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
// // //               />
// // //             </div>
// // //           ))}

// // //           <div className="mt-4">
// // //             <label className="block text-lg font-semibold mb-1">Rolni tanlang</label>
// // //             <select
// // //               name="role"
// // //               value={form.role}
// // //               onChange={handleChange}
// // //               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
// // //             >
// // //               <option value="student">O'quvchi</option>
// // //               <option value="teacher">O'qituvchi</option>
// // //             </select>
// // //           </div>

// // //           <button
// // //             type="submit"
// // //             className='w-full py-3 mt-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'
// // //           >
// // //             Ro'yxatdan o'tish
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Register;








































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, db } from '../Firebase/firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

// const Register = () => {
//   const [form, setForm] = useState({
//     fullName: '',
//     nickname: '',
//     age: '',
//     grade: '',
//     email: '',
//     password: '',
//     role: 'student',
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
//       const user = userCredential.user;

//       await setDoc(doc(db, "users", user.uid), {
//         ...form,
//         uid: user.uid,
//         createdAt: serverTimestamp(),
//       });

//       navigate('/profile');
//     } catch (err) {
//       setError("Xatolik: " + err.message);
//     }
//   };

//   return (
//     <div className='min-h-screen flex justify-center items-center bg-gray-100'>
//       <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
//         <h2 className='text-3xl font-bold text-center mb-6 text-green-600'>Ro'yxatdan o'tish</h2>

//         <form onSubmit={handleRegister} className="space-y-4">
//           {[
//             { label: 'To‘liq ism', name: 'fullName', type: 'text' },
//             { label: 'Taxallus', name: 'nickname', type: 'text' },
//             { label: 'Yosh', name: 'age', type: 'number' },
//             { label: 'Sinf', name: 'grade', type: 'text' },
//             { label: 'Email', name: 'email', type: 'email' },
//             { label: 'Parol', name: 'password', type: 'password' },
//           ].map((field) => (
//             <div key={field.name}>
//               <label className="block font-medium">{field.label}</label>
//               <input
//                 name={field.name}
//                 type={field.type}
//                 value={form[field.name]}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-lg"
//               />
//             </div>
//           ))}

//           <div>
//             <label className="block font-medium">Rol</label>
//             <select
//               name="role"
//               value={form.role}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg"
//             >
//               <option value="student">O'quvchi</option>
//               <option value="teacher">O'qituvchi</option>
//             </select>
//           </div>

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className='w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700'
//           >
//             Ro'yxatdan o'tish
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;




































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    nickname: '',
    age: '',
    grade: '',
    email: '',
    password: '',
    role: 'student',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear age and grade if switching to teacher
    if (name === 'role' && value === 'teacher') {
      setForm((prev) => ({
        ...prev,
        role: value,
        age: '',
        grade: ''
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      const userData = {
        fullName: form.fullName,
        nickname: form.nickname,
        email: form.email,
        role: form.role,
        uid: user.uid,
        createdAt: serverTimestamp(),
      };

      if (form.role === 'student') {
        userData.age = form.age;
        userData.grade = form.grade;
      }

      await setDoc(doc(db, "users", user.uid), userData);

      navigate('/profile');
    } catch (err) {
      setError("Xatolik: " + err.message);
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
        <h2 className='text-3xl font-bold text-center mb-6 text-green-600'>Ro'yxatdan o'tish</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block font-medium">To‘liq ism</label>
            <input
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium">Taxallus</label>
            <input
              name="nickname"
              type="text"
              value={form.nickname}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {form.role === 'student' && (
            <>
              <div>
                <label className="block font-medium">Yosh</label>
                <input
                  name="age"
                  type="number"
                  value={form.age}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Sinf</label>
                <input
                  name="grade"
                  type="text"
                  value={form.grade}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
            </>
          )}

          <div>
            <label className="block font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium">Parol</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium">Rol</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="student">O'quvchi</option>
              <option value="teacher">O'qituvchi</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className='w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700'
          >
            Ro'yxatdan o'tish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;