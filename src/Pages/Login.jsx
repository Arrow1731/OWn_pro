// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class Login extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <div className='max-w-[320px] w-full'>
//           <div>
//             <label htmlFor="text">Emailingizni Kiriting</label><br />
//             <input className='w-[320px] p-[8px] rounded-lg' type="email" name="" id="" placeholder='E-mail' /><br />
//             <label htmlFor="text">Parolingizni Kiriting</label><br />
//             <input className='w-[320px] p-[8px] rounded-lg' type="password" name="" id="" placeholder='Password' /><br />
//             <div className='flex justify-between'>
//               <button>Log In</button>
//               <Link to={'/register'}>Sign Up</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }



import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth, provider } from '../Firebase/firebase';
import { signInWithPopup } from 'firebase/auth';

export default class Login extends Component {
  handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google user:", user);
      // You can redirect or store user info as needed
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='max-w-[320px] w-full'>
          <div>
            <label htmlFor="email">Emailingizni Kiriting</label><br />
            <input className='w-[320px] p-[8px] rounded-lg' type="email" id="email" placeholder='E-mail' /><br />

            <label htmlFor="password">Parolingizni Kiriting</label><br />
            <input className='w-[320px] p-[8px] rounded-lg' type="password" id="password" placeholder='Password' /><br />

            <div className='flex justify-between mt-2'>
              <button>Log In</button>
              <Link to='/register'>Sign Up</Link>
            </div>

            <div className='mt-4'>
              <button
                onClick={this.handleGoogleLogin}
                className='w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition'
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}