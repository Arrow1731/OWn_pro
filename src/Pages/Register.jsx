// // // import React, { Component } from 'react'
// // // import { NavLink } from 'react-router-dom'

// // // export default class Register extends Component {
// // //     render() {
// // //         return (
// // //             <div className='container'>
// // //                 <div className='max-w-[320px] w-full'>
// // //                     <label htmlFor="text">Emailingizni Kiriting</label><br />
// // //                     <input className='w-[320px] p-[8px] rounded-lg' type="email" name="" id="" placeholder='E-mail' /><br />
// // //                     <label htmlFor="text">Parolingizni Kiriting</label><br />
// // //                     <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Password' /><br />
// // //                     <label htmlFor="text">Parolingizni Takroriy Kiriting</label><br />
// // //                     <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Re-Enter Password' /><br />
// // //                     <div className='flex justify-between'>
// // //                         <NavLink to="/login">Log In</NavLink>
// // //                         <NavLink to="/register">Sign Up</NavLink>
// // //                         <button>Google</button>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         )
// // //     }
// // // }



// // import React, { Component } from 'react';
// // import { NavLink } from 'react-router-dom';
// // import { auth, provider } from '../Firebase/firebase';
// // import { signInWithPopup } from 'firebase/auth';

// // export default class Register extends Component {
// //   handleGoogleSignUp = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;
// //       console.log("Google registered user:", user);
// //       // You can save user info or redirect here
// //     } catch (error) {
// //       console.error("Google Sign-Up Error:", error);
// //     }
// //   };

// //   render() {
// //     return (
// //       <div className='container'>
// //         <div className='max-w-[320px] w-full'>
// //           <label htmlFor="email">Emailingizni Kiriting</label><br />
// //           <input className='w-[320px] p-[8px] rounded-lg' type="email" id="email" placeholder='E-mail' /><br />

// //           <label htmlFor="password">Parolingizni Kiriting</label><br />
// //           <input className='w-[320px] p-[8px] rounded-lg' type="password" id="password" placeholder='Password' /><br />

// //           <label htmlFor="re-password">Parolingizni Takroriy Kiriting</label><br />
// //           <input className='w-[320px] p-[8px] rounded-lg' type="password" id="re-password" placeholder='Re-Enter Password' /><br />

// //           <div className='flex justify-between mt-2 items-center'>
// //             <NavLink to="/login">Log In</NavLink>
// //             {/* <NavLink to="/register">Sign Up</NavLink> */}
// //             <button onClick={this.handleGoogleSignUp}className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition">Sign Up with Google</button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }


// // import React, { Component } from 'react'
// // import { NavLink } from 'react-router-dom'
// // import { auth, provider } from '../Firebase/firebase'
// // import { signInWithPopup } from 'firebase/auth'

// // export default class Register extends Component {
// //   handleGoogleSignUp = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider)
// //       const user = result.user
// //       console.log("Google registered user:", user)
// //       // Optional: Redirect or save user to backend here
// //     } catch (error) {
// //       console.error("Google Sign-Up Error:", error)
// //     }
// //   }

// //   render() {
// //     return (
// //       <div className='container flex justify-center items-center h-screen'>
// //         <div className='max-w-[320px] w-full p-4 border rounded-lg shadow-md'>
// //           <label htmlFor="email">Emailingizni Kiriting</label><br />
// //           <input className='w-full p-2 mb-2 rounded-lg border' type="email" id="email" placeholder='E-mail' /><br />

// //           <label htmlFor="password">Parolingizni Kiriting</label><br />
// //           <input className='w-full p-2 mb-2 rounded-lg border' type="password" id="password" placeholder='Password' /><br />

// //           <label htmlFor="re-password">Parolingizni Takroriy Kiriting</label><br />
// //           <input className='w-full p-2 mb-4 rounded-lg border' type="password" id="re-password" placeholder='Re-Enter Password' /><br />

// //           <div className='flex justify-between items-center mb-4'>
// //             <NavLink to="/login" className="text-blue-600">Log In</NavLink>
// //             {/* <NavLink to="/register">Sign Up</NavLink> */}
// //           </div>

// //           <button
// //             onClick={this.handleGoogleSignUp}
// //             className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
// //           >
// //             Sign Up with Google
// //           </button>
// //         </div>
// //       </div>
// //     )
// //   }
// // }





// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import { auth, provider } from '../Firebase/firebase';
// import { signInWithPopup } from 'firebase/auth';

// export default class Register extends Component {
//   handleGoogleSignUp = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log("Google registered user:", user);
//       // Optional: Redirect or save user to backend here
//     } catch (error) {
//       console.error("Google Sign-Up Error:", error);
//     }
//   };

//   render() {
//     return (
//       <div className='min-h-screen flex justify-center items-center bg-gray-100'>
//         <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
//           <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Create an Account</h2>

//           {/* Email Input */}
//           <div className='mb-4'>
//             <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
//             <input
//               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//               type="email"
//               id="email"
//               placeholder='Enter your email'
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className='mb-4'>
//             <label htmlFor="password" className='block text-lg font-semibold'>Password</label>
//             <input
//               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//               type="password"
//               id="password"
//               placeholder='Enter your password'
//               required
//             />
//           </div>

//           {/* Re-enter Password Input */}
//           <div className='mb-6'>
//             <label htmlFor="re-password" className='block text-lg font-semibold'>Re-enter Password</label>
//             <input
//               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//               type="password"
//               id="re-password"
//               placeholder='Re-enter your password'
//               required
//             />
//           </div>

//           {/* Login Link */}
//           <div className='flex justify-between items-center mb-4'>
//             <NavLink to="/login" className="text-blue-600">Already have an account? Log In</NavLink>
//           </div>

//           {/* Sign-Up Button */}
//           <button
//             onClick={this.handleGoogleSignUp}
//             className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//           >
//             Sign Up with Google
//           </button>

//           {/* Or alternative method */}
//           <div className='mt-4 text-center'>
//             <p className='text-sm'>Or, sign up with your email</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }










// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import { auth, provider } from '../Firebase/firebase';
// import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

// export default class Register extends Component {
//   state = {
//     email: '',
//     password: '',
//     confirmPassword: '',
//     error: '',
//   };

//   handleInputChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleGoogleSignUp = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log("Google registered user:", user);
//       // Optional: Redirect or save user to backend here
//     } catch (error) {
//       console.error("Google Sign-Up Error:", error);
//       this.setState({ error: error.message });
//     }
//   };

//   handleEmailSignUp = async (e) => {
//     e.preventDefault();
//     const { email, password, confirmPassword } = this.state;

//     if (password !== confirmPassword) {
//       this.setState({ error: "Passwords do not match!" });
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log("Email registered user:", user);
//       // Optional: Redirect or save user to backend here
//     } catch (error) {
//       console.error("Email Sign-Up Error:", error);
//       this.setState({ error: error.message });
//     }
//   };

//   render() {
//     const { email, password, confirmPassword, error } = this.state;

//     return (
//       <div className='min-h-screen flex justify-center items-center bg-gray-100'>
//         <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
//           <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Create an Account</h2>

//           {/* Email and Password Form */}
//           <form onSubmit={this.handleEmailSignUp}>
//             <div className='mb-4'>
//               <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
//               <input
//                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={this.handleInputChange}
//                 placeholder='Enter your email'
//                 required
//               />
//             </div>

//             <div className='mb-4'>
//               <label htmlFor="password" className='block text-lg font-semibold'>Password</label>
//               <input
//                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={this.handleInputChange}
//                 placeholder='Enter your password'
//                 required
//               />
//             </div>

//             <div className='mb-6'>
//               <label htmlFor="confirmPassword" className='block text-lg font-semibold'>Confirm Password</label>
//               <input
//                 className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={this.handleInputChange}
//                 placeholder='Re-enter your password'
//                 required
//               />
//             </div>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//             {/* Sign-Up Button */}
//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//             >
//               Sign Up with Email
//             </button>
//           </form>

//           {/* Login Link */}
//           <div className='flex justify-between items-center mb-4 mt-6'>
//             <NavLink to="/login" className="text-blue-600">Already have an account? Log In</NavLink>
//           </div>

//           {/* Google Sign-Up Button */}
//           <button
//             onClick={this.handleGoogleSignUp}
//             className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mt-4"
//           >
//             Sign Up with Google
//           </button>
//         </div>
//       </div>
//     );
//   }
// }










import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { auth, provider, db } from '../Firebase/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    error: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveUserToFirestore = async (user, role, email) => {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email,
        role,
        createdAt: new Date(),
      });
    } catch (err) {
      console.error('Firestore Error:', err);
    }
  };

  handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google registered user:', user);
      await this.saveUserToFirestore(user, this.state.role, user.email);
    } catch (error) {
      console.error('Google Sign-Up Error:', error);
      this.setState({ error: error.message });
    }
  };

  handleEmailSignUp = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, role } = this.state;

    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match!' });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Email registered user:', user);
      await this.saveUserToFirestore(user, role, email);
    } catch (error) {
      console.error('Email Sign-Up Error:', error);
      this.setState({ error: error.message });
    }
  };

  render() {
    const { email, password, confirmPassword, role, error } = this.state;

    return (
      <div className='min-h-screen flex justify-center items-center bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
          <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Hisob yaratish</h2>

          <form onSubmit={this.handleEmailSignUp}>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
              <input
                className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
                placeholder='Emailingizni kiriting'
                required
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="password" className='block text-lg font-semibold'>Parol</label>
              <input
                className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
                placeholder='Parolingizni kiriting'
                required
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="confirmPassword" className='block text-lg font-semibold'>Parolni tastiqlang</label>
              <input
                className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleInputChange}
                placeholder='Parolni qayta kiriting'
                required
              />
            </div>

            <div className='mb-6'>
              <label htmlFor="role" className='block text-lg font-semibold'>Tanlang</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={this.handleInputChange}
                className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              >
                <option value="student">O'quvchi</option>
                <option value="teacher">O'qituvchi</option>
              </select>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Email bilan ro'yxatdan o'tish
            </button>
          </form>

          <div className='flex justify-between items-center mb-4 mt-6'>
            <NavLink to="/login" className="text-blue-600">Profilingiz bormi? Tizimga kirish</NavLink>
          </div>

          <button
            onClick={this.handleGoogleSignUp}
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition mt-4"
          >
            Google bilan ro'yxatdan o'tish
          </button>
        </div>
      </div>
    );
  }
}