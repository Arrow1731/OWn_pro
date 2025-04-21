// import React from "react";
// import { NavLink } from "react-router-dom";
// // import Logo from './assets/Logo-Photoroom.png';
// // import TelegramIcon from './assets/telegram-brands.svg';
// // import User from './assets/user-solid.svg';
// // import InstaIcon from './assets/instagram-brands.svg';
// // import FacebookIcon from './assets/square-facebook-brands.svg';
// // import TwitterIcon from './assets/twitter-brands.svg';
// // import EmailIcon from './assets/envelope-solid.svg';
// // import YouTubeIcon from './assets/youtube-brands.svg';

// function Navigation() {
//   return (
//     <div className="bg-[#f7bf9f]">
//     <nav className="container py-[20px] flex justify-between items-center">

//       <NavLink exact to="/" activeClassName="active">Logo</NavLink>
//       <span className="flex gap-[40px] items-center">
//         <NavLink className='font-lato font-bold text-[#424551]' to="/" activeClassName="active">Home</NavLink>
//         <NavLink className='font-lato font-bold text-[#424551]' to="/about" activeClassName="active">About</NavLink>
//         <NavLink className='font-lato font-bold text-[#424551]' to="/contact" activeClassName="active">Contact</NavLink>
//         {/* <NavLink className='font-lato font-bold text-[#424551]' to="/student" activeClassName="active">Student</NavLink> */}
//         {/* <NavLink className='font-lato font-bold text-[#424551]' to="/teacher" activeClassName="active">Teacher</NavLink> */}
//       </span>
//       <span className="flex gap-[36px] items-center">
//         <NavLink className='font-lato font-bold text-[#424551]' to="/login" activeClassName="active">Log in / Register</NavLink>
//       </span>
//     </nav>
//     <div>
//       {/* <header>
//         <div></div>
//         <div>
//           <h2>About Edu Center</h2>
//           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quibusdam a perspiciatis necessitatibus officiis mollitia reiciendis debitis doloremque dolorum. Perferendis sequi aliquam harum provident nisi modi maiores assumenda corporis aut corrupti voluptates ipsa cumque, aspernatur voluptatem iure ipsum consequatur iste?
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quibusdam a perspiciatis necessitatibus officiis mollitia reiciendis debitis doloremque dolorum. Perferendis sequi aliquam harum provident nisi modi maiores assumenda corporis aut corrupti voluptates ipsa cumque, aspernatur voluptatem iure ipsum consequatur iste?</p>
//           <div>
//             <NavLink className='font-lato font-bold text-[#424551]' to="https://instagram.com" activeClassName="active"><img src={InstaIcon} alt="" /></NavLink>
//           </div>
//         </div>
//       </header> */}
//     </div>
//     </div>
//   );
// }

// export default Navigation;




import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from '../Firebase/firebase';
import { signOut } from 'firebase/auth';

function Navigation() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="bg-[#f7bf9f]">
      <nav className="container py-[20px] flex justify-between items-center">

        <NavLink exact="true" to="/" className={({ isActive }) => isActive ? 'active' : ''}>Logo</NavLink>

        <span className="flex gap-[40px] items-center">
          <NavLink className='font-lato font-bold text-[#424551]' to="/" >Home</NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/about" >About</NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/contact" >Contact</NavLink>
        </span>

        <span className="flex gap-[36px] items-center">
          {user ? (
            <>
              <NavLink className='font-lato font-bold text-[#424551]' to="/profile">Profile</NavLink>
              <button
                onClick={handleLogout}
                className="font-lato font-bold text-[#424551] border px-3 py-1 rounded hover:bg-red-200"
              >
                Log Out
              </button>
            </>
          ) : (
            <NavLink className='font-lato font-bold text-[#424551]' to="/login">Log in / Register</NavLink>
          )}
        </span>
      </nav>
    </div>
  );
}

export default Navigation;