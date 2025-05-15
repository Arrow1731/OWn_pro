// // // // import React, { Component } from 'react';
// // // // import { Link } from 'react-router-dom';

// // // // export default class Login extends Component {
// // // //   render() {
// // // //     return (
// // // //       <div className='container'>
// // // //         <div className='max-w-[320px] w-full'>
// // // //           <div>
// // // //             <label htmlFor="text">Emailingizni Kiriting</label><br />
// // // //             <input className='w-[320px] p-[8px] rounded-lg' type="email" name="" id="" placeholder='E-mail' /><br />
// // // //             <label htmlFor="text">Parolingizni Kiriting</label><br />
// // // //             <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Password' /><br />
// // // //             <div className='flex justify-between'>
// // // //               <button>Log In</button>
// // // //               <Link to={'/register'}>Sign Up</Link>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }
// // // // }



// // // // import React, { Component } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { auth, provider } from '../Firebase/firebase';
// // // // import { signInWithPopup } from 'firebase/auth';

// // // // export default class Login extends Component {
// // // //   handleGoogleLogin = async () => {
// // // //     try {
// // // //       const result = await signInWithPopup(auth, provider);
// // // //       const user = result.user;
// // // //       console.log("Google user:", user);
// // // //       // You can redirect or store user info as needed
// // // //     } catch (error) {
// // // //       console.error("Google Sign-In Error:", error);
// // // //     }
// // // //   };

// // // //   render() {
// // // //     return (
// // // //       <div className='container'>
// // // //         <div className='max-w-[320px] w-full'>
// // // //           <div>
// // // //             <label htmlFor="email">Emailingizni Kiriting</label><br />
// // // //             <input className='w-[320px] p-[8px] rounded-lg' type="email" id="email" placeholder='E-mail' /><br />

// // // //             <label htmlFor="password">Parolingizni Kiriting</label><br />
// // // //             <input className='w-[320px] p-[8px] rounded-lg' type="password" id="password" placeholder='Password' /><br />

// // // //             <div className='flex justify-between mt-2'>
// // // //               <button>Log In</button>
// // // //               <Link to='/register'>Sign Up</Link>
// // // //             </div>

// // // //             <div className='mt-4'>
// // // //               <button
// // // //                 onClick={this.handleGoogleLogin}
// // // //                 className='w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition'
// // // //               >
// // // //                 Sign in with Google
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }
// // // // }



// // // import React, { Component } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { auth, provider } from '../Firebase/firebase';
// // // import { signInWithPopup } from 'firebase/auth';

// // // export default class Login extends Component {
// // //   handleGoogleLogin = async () => {
// // //     try {
// // //       const result = await signInWithPopup(auth, provider);
// // //       const user = result.user;
// // //       console.log("Google user:", user);
// // //       // You can redirect or store user info as needed
// // //     } catch (error) {
// // //       console.error("Google Sign-In Error:", error);
// // //     }
// // //   };

// // //   render() {
// // //     return (
// // //       <div className='min-h-screen flex justify-center items-center bg-gray-100'>
// // //         <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
// // //           <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Shaxsiy kabinetga kirish</h2>

// // //           {/* Email Input */}
// // //           <div className='mb-4'>
// // //             <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
// // //             <input className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // //                    type="email" id="email" placeholder='Emailingizni kiriting' />
// // //           </div>

// // //           {/* Password Input */}
// // //           <div className='mb-6'>
// // //             <label htmlFor="password" className='block text-lg font-semibold'>Parol</label>
// // //             <input className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// // //                    type="password" id="password" placeholder='Parolingizni kiriting' />
// // //           </div>

// // //           {/* Login and Sign Up Links */}
// // //           <div className='flex justify-between items-center'>
// // //             <button className='w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Tizimga kirish</button>
// // //           </div>

// // //           {/* Sign Up Button */}
// // //           <div className='mt-4 text-center'>
// // //             <p className='text-sm mb-2'>Sizda profilingiz yoqmi unda battar boling?</p>
// // //             <Link to='/register'>
// // //               <button className='w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition'>
// // //                 Ro'yxatdan o'tish
// // //               </button>
// // //             </Link>
// // //           </div>

// // //           {/* Google Sign-In */}
// // //           <div className='mt-6'>
// // //             <button
// // //               onClick={this.handleGoogleLogin}
// // //               className='w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
// // //             >
// // //               Google bilan tizimga kirish
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // // }





































// // import React, { Component } from 'react';
// // import { Link, Navigate } from 'react-router-dom';
// // import { auth, provider } from '../Firebase/firebase';
// // import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

// // export default class Login extends Component {
// //   state = {
// //     email: '',
// //     password: '',
// //     redirectToProfile: false,
// //     error: '',
// //   };

// //   handleInputChange = (e) => {
// //     this.setState({ [e.target.id]: e.target.value });
// //   };

// //   handleLogin = async () => {
// //     const { email, password } = this.state;
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       this.setState({ redirectToProfile: true });
// //     } catch (error) {
// //       this.setState({ error: error.message });
// //     }
// //   };

// //   handleGoogleLogin = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;
// //       console.log("Google user:", user);
// //       this.setState({ redirectToProfile: true });
// //     } catch (error) {
// //       console.error("Google Sign-In Error:", error);
// //     }
// //   };

// //   render() {
// //     if (this.state.redirectToProfile) {
// //       return <Navigate to="/profile" />;
// //     }

// //     return (
// //       <div className='min-h-screen flex justify-center items-center bg-gray-100'>
// //         <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
// //           <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Shaxsiy kabinetga kirish</h2>

// //           <div className='mb-4'>
// //             <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
// //             <input
// //               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               type="email" id="email" placeholder='Emailingizni kiriting'
// //               value={this.state.email} onChange={this.handleInputChange} />
// //           </div>

// //           <div className='mb-6'>
// //             <label htmlFor="password" className='block text-lg font-semibold'>Parol</label>
// //             <input
// //               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               type="password" id="password" placeholder='Parolingizni kiriting'
// //               value={this.state.password} onChange={this.handleInputChange} />
// //           </div>

// //           {this.state.error && <p className="text-red-500 text-sm mb-4">{this.state.error}</p>}

// //           <div className='flex justify-between items-center'>
// //             <button
// //               onClick={this.handleLogin}
// //               className='w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
// //             >Tizimga kirish</button>
// //           </div>

// //           <div className='mt-4 text-center'>
// //             <p className='text-sm mb-2'>Sizda profilingiz yoqmi unda battar boling?</p>
// //             <Link to='/register'>
// //               <button className='w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition'>
// //                 Ro'yxatdan o'tish
// //               </button>
// //             </Link>
// //           </div>

// //           <div className='mt-6'>
// //             <button
// //               onClick={this.handleGoogleLogin}
// //               className='w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
// //             >
// //               Google bilan tizimga kirish
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }




















































// import React, { Component } from 'react';
// import { Link, Navigate } from 'react-router-dom';
// import { auth, provider } from '../Firebase/firebase';
// import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

// export default class Login extends Component {
//   state = {
//     email: '',
//     password: '',
//     redirectToProfile: false,
//     error: '',
//   };

//   handleInputChange = (e) => {
//     this.setState({ [e.target.id]: e.target.value });
//   };

//   handleLogin = async () => {
//     const { email, password } = this.state;
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       this.setState({ redirectToProfile: true });
//     } catch (error) {
//       this.setState({ error: error.message });
//     }
//   };

//   handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log("Google user:", user);
//       this.setState({ redirectToProfile: true });
//     } catch (error) {
//       console.error("Google Sign-In Error:", error);
//     }
//   };

//   render() {
//     if (this.state.redirectToProfile) {
//       return <Navigate to="/profile" />;
//     }

//     return (
//       <div className='min-h-screen flex justify-center items-center bg-gray-100'>
//         <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
//           <h2 className='text-3xl font-bold text-center mb-6 text-blue-600'>Shaxsiy kabinetga kirish</h2>

//           <div className='mb-4'>
//             <label htmlFor="email" className='block text-lg font-semibold'>Email</label>
//             <input
//               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//               type="email" id="email" placeholder='Emailingizni kiriting'
//               value={this.state.email} onChange={this.handleInputChange} />
//           </div>

//           <div className='mb-6'>
//             <label htmlFor="password" className='block text-lg font-semibold'>Parol</label>
//             <input
//               className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//               type="password" id="password" placeholder='Parolingizni kiriting'
//               value={this.state.password} onChange={this.handleInputChange} />
//           </div>

//           {this.state.error && <p className="text-red-500 text-sm mb-4">{this.state.error}</p>}

//           <div className='flex justify-between items-center'>
//             <button
//               onClick={this.handleLogin}
//               className='w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
//             >Tizimga kirish</button>
//           </div>

//           <div className='mt-4 text-center'>
//             <p className='text-sm mb-2'>Sizda profilingiz yoqmi unda battar boling?</p>
//             <Link to='/register'>
//               <button className='w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition'>
//                 Ro'yxatdan o'tish
//               </button>
//             </Link>
//           </div>

//           <div className='mt-6'>
//             <button
//               onClick={this.handleGoogleLogin}
//               className='w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
//             >
//               Google bilan tizimga kirish
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }








































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