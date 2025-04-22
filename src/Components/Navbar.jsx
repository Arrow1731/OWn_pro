// // // // import React from "react";
// // // // import { NavLink } from "react-router-dom";
// // // // // import Logo from './assets/Logo-Photoroom.png';
// // // // // import TelegramIcon from './assets/telegram-brands.svg';
// // // // // import User from './assets/user-solid.svg';
// // // // // import InstaIcon from './assets/instagram-brands.svg';
// // // // // import FacebookIcon from './assets/square-facebook-brands.svg';
// // // // // import TwitterIcon from './assets/twitter-brands.svg';
// // // // // import EmailIcon from './assets/envelope-solid.svg';
// // // // // import YouTubeIcon from './assets/youtube-brands.svg';

// // // // function Navigation() {
// // // //   return (
// // // //     <div className="bg-[#f7bf9f]">
// // // //     <nav className="container py-[20px] flex justify-between items-center">

// // // //       <NavLink exact to="/" activeClassName="active">Logo</NavLink>
// // // //       <span className="flex gap-[40px] items-center">
// // // //         <NavLink className='font-lato font-bold text-[#424551]' to="/" activeClassName="active">Home</NavLink>
// // // //         <NavLink className='font-lato font-bold text-[#424551]' to="/about" activeClassName="active">About</NavLink>
// // // //         <NavLink className='font-lato font-bold text-[#424551]' to="/contact" activeClassName="active">Contact</NavLink>
// // // //         {/* <NavLink className='font-lato font-bold text-[#424551]' to="/student" activeClassName="active">Student</NavLink> */}
// // // //         {/* <NavLink className='font-lato font-bold text-[#424551]' to="/teacher" activeClassName="active">Teacher</NavLink> */}
// // // //       </span>
// // // //       <span className="flex gap-[36px] items-center">
// // // //         <NavLink className='font-lato font-bold text-[#424551]' to="/login" activeClassName="active">Log in / Register</NavLink>
// // // //       </span>
// // // //     </nav>
// // // //     <div>
// // // //       {/* <header>
// // // //         <div></div>
// // // //         <div>
// // // //           <h2>About Edu Center</h2>
// // // //           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quibusdam a perspiciatis necessitatibus officiis mollitia reiciendis debitis doloremque dolorum. Perferendis sequi aliquam harum provident nisi modi maiores assumenda corporis aut corrupti voluptates ipsa cumque, aspernatur voluptatem iure ipsum consequatur iste?
// // // //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quibusdam a perspiciatis necessitatibus officiis mollitia reiciendis debitis doloremque dolorum. Perferendis sequi aliquam harum provident nisi modi maiores assumenda corporis aut corrupti voluptates ipsa cumque, aspernatur voluptatem iure ipsum consequatur iste?</p>
// // // //           <div>
// // // //             <NavLink className='font-lato font-bold text-[#424551]' to="https://instagram.com" activeClassName="active"><img src={InstaIcon} alt="" /></NavLink>
// // // //           </div>
// // // //         </div>
// // // //       </header> */}
// // // //     </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Navigation;


import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from '../Firebase/firebase';
import { signOut } from 'firebase/auth';
import { Menu, X } from 'lucide-react'; // Hamburger icons

function Navigation() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#f7bf9f]">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink exact="true" to="/" className="text-xl font-bold text-[#424551]">Logo</NavLink>

        {/* Hamburger Button */}
        <button className="lg:hidden text-[#424551]" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div className={`flex-col lg:flex-row lg:flex gap-6 items-center absolute lg:static bg-[#f7bf9f] w-full lg:w-auto left-0 top-[70px] p-4 lg:p-0 z-10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <NavLink className='font-lato font-bold text-[#424551]' to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>

          {user ? (
            <>
              <NavLink className='font-lato font-bold text-[#424551]' to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</NavLink>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="font-lato font-bold text-[#424551] border px-3 py-1 rounded hover:bg-red-200"
              >
                Log Out
              </button>
            </>
          ) : (
            <NavLink className='font-lato font-bold text-[#424551]' to="/login" onClick={() => setIsMenuOpen(false)}>Log in / Register</NavLink>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;






// import React from "react";
// import { NavLink } from "react-router-dom";

// function Navigation() {
//   return (
//     <div className="bg-[#f7bf9f]">
//       <nav className="container mx-auto py-5 flex flex-col md:flex-row justify-between items-center">
        
//         {/* Logo (left on larger screens) */}
//         <div className="mb-4 md:mb-0">
//           <NavLink to="/" className="font-lato font-bold text-xl text-[#424551]">Logo</NavLink>
//         </div>

//         {/* Centered Nav Links */}
//         <div className="flex gap-10 justify-center mb-4 md:mb-0">
//           <NavLink className="font-lato font-bold text-[#424551]" to="/" activeClassName="active">Home</NavLink>
//           <NavLink className="font-lato font-bold text-[#424551]" to="/about" activeClassName="active">About</NavLink>
//           <NavLink className="font-lato font-bold text-[#424551]" to="/contact" activeClassName="active">Contact</NavLink>
//         </div>

//         {/* Log in / Register (right on larger screens) */}
//         <div>
//           <NavLink className="font-lato font-bold text-[#424551]" to="/login" activeClassName="active">
//             Log in / Register
//           </NavLink>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navigation;




// // import React, { useState } from "react";
// // import { NavLink } from "react-router-dom";

// // function Navigation() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <div className="bg-[#f7bf9f]">
// //       <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
// //         {/* Logo */}
// //         <NavLink to="/" className="text-xl font-lato font-bold text-[#424551]">
// //           Logo
// //         </NavLink>

// //         {/* Hamburger Button (mobile only) */}
// //         <button
// //           className="md:hidden text-[#424551] focus:outline-none"
// //           onClick={toggleMenu}
// //         >
// //           <svg
// //             className="w-6 h-6"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //           >
// //             {isMenuOpen ? (
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M6 18L18 6M6 6l12 12"
// //               />
// //             ) : (
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M4 6h16M4 12h16M4 18h16"
// //               />
// //             )}
// //           </svg>
// //         </button>

// //         {/* Menu Items */}
// //         <div className={`md:flex md:items-center md:gap-10 ${isMenuOpen ? "block" : "hidden"} md:block`}>
// //           <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
// //             <NavLink className="font-lato font-bold text-[#424551]" to="/">Home</NavLink>
// //             <NavLink className="font-lato font-bold text-[#424551]" to="/about">About</NavLink>
// //             <NavLink className="font-lato font-bold text-[#424551]" to="/contact">Contact</NavLink>
// //             <NavLink className="font-lato font-bold text-[#424551]" to="/login">Log in / Register</NavLink>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // export default Navigation;



// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Navigation() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <header className="bg-[#f7bf9f] shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold text-[#424551] font-lato">
//           Logo
//         </NavLink>

//         {/* Hamburger Button */}
//         <button
//           className="md:hidden focus:outline-none text-[#424551]"
//           onClick={toggleMenu}
//           aria-label="Toggle Menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {menuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//         {/* Nav Links */}
//         <nav
//           className={`${
//             menuOpen ? "block" : "hidden"
//           } absolute top-full left-0 w-full bg-[#f7bf9f] md:bg-transparent md:static md:block`}
//         >
//           <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-4 md:py-0 text-center">
//             <li>
//               <NavLink to="/" className="text-[#424551] font-bold font-lato" onClick={() => setMenuOpen(false)}>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" className="text-[#424551] font-bold font-lato" onClick={() => setMenuOpen(false)}>
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" className="text-[#424551] font-bold font-lato" onClick={() => setMenuOpen(false)}>
//                 Contact
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/login" className="text-[#424551] font-bold font-lato" onClick={() => setMenuOpen(false)}>
//                 Log in / Register
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navigation;