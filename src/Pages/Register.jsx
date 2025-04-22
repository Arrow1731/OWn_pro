// // import React, { Component } from 'react'
// // import { NavLink } from 'react-router-dom'

// // export default class Register extends Component {
// //     render() {
// //         return (
// //             <div className='container'>
// //                 <div className='max-w-[320px] w-full'>
// //                     <label htmlFor="text">Emailingizni Kiriting</label><br />
// //                     <input className='w-[320px] p-[8px] rounded-lg' type="email" name="" id="" placeholder='E-mail' /><br />
// //                     <label htmlFor="text">Parolingizni Kiriting</label><br />
// //                     <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Password' /><br />
// //                     <label htmlFor="text">Parolingizni Takroriy Kiriting</label><br />
// //                     <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Re-Enter Password' /><br />
// //                     <div className='flex justify-between'>
// //                         <NavLink to="/login">Log In</NavLink>
// //                         <NavLink to="/register">Sign Up</NavLink>
// //                         <button>Google</button>
// //                     </div>
// //                 </div>
// //             </div>
// //         )
// //     }
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
//       // You can save user info or redirect here
//     } catch (error) {
//       console.error("Google Sign-Up Error:", error);
//     }
//   };

//   render() {
//     return (
//       <div className='container'>
//         <div className='max-w-[320px] w-full'>
//           <label htmlFor="email">Emailingizni Kiriting</label><br />
//           <input className='w-[320px] p-[8px] rounded-lg' type="email" id="email" placeholder='E-mail' /><br />

//           <label htmlFor="password">Parolingizni Kiriting</label><br />
//           <input className='w-[320px] p-[8px] rounded-lg' type="password" id="password" placeholder='Password' /><br />

//           <label htmlFor="re-password">Parolingizni Takroriy Kiriting</label><br />
//           <input className='w-[320px] p-[8px] rounded-lg' type="password" id="re-password" placeholder='Re-Enter Password' /><br />

//           <div className='flex justify-between mt-2 items-center'>
//             <NavLink to="/login">Log In</NavLink>
//             {/* <NavLink to="/register">Sign Up</NavLink> */}
//             <button onClick={this.handleGoogleSignUp}className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition">Sign Up with Google</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { auth, provider } from '../Firebase/firebase'
import { signInWithPopup } from 'firebase/auth'

export default class Register extends Component {
  handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log("Google registered user:", user)
      // Optional: Redirect or save user to backend here
    } catch (error) {
      console.error("Google Sign-Up Error:", error)
    }
  }

  render() {
    return (
      <div className='container flex justify-center items-center h-screen'>
        <div className='max-w-[320px] w-full p-4 border rounded-lg shadow-md'>
          <label htmlFor="email">Emailingizni Kiriting</label><br />
          <input className='w-full p-2 mb-2 rounded-lg border' type="email" id="email" placeholder='E-mail' /><br />

          <label htmlFor="password">Parolingizni Kiriting</label><br />
          <input className='w-full p-2 mb-2 rounded-lg border' type="password" id="password" placeholder='Password' /><br />

          <label htmlFor="re-password">Parolingizni Takroriy Kiriting</label><br />
          <input className='w-full p-2 mb-4 rounded-lg border' type="password" id="re-password" placeholder='Re-Enter Password' /><br />

          <div className='flex justify-between items-center mb-4'>
            <NavLink to="/login" className="text-blue-600">Log In</NavLink>
            {/* <NavLink to="/register">Sign Up</NavLink> */}
          </div>

          <button
            onClick={this.handleGoogleSignUp}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sign Up with Google
          </button>
        </div>
      </div>
    )
  }
}