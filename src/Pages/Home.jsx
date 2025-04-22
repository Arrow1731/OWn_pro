// // import React, { Component } from 'react'
// // // import Logo from './assets/Logo-Photoroom.png';
// // import TelegramIcon from '../assets/telegram-brands.svg';
// // import User from '../assets/user-solid.svg';
// // import InstaIcon from '../assets/instagram-brands.svg';
// // import FacebookIcon from '../assets/square-facebook-brands.svg'
// // import TwitterIcon from '../assets/twitter-brands.svg';
// // import EmailIcon from '../assets/envelope-solid.svg';
// // // import YouTubeIcon from './assets/youtube-brands.svg';

// // export default class Home extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <header className='container'>
// //           <div className='flex justify-between items-center'>
// //               <div></div>
// //               <div className='w-[735px] font-bold font-lato'>
// //                 <h2 className='text-[63px]'>About Edu Center</h2>
// //                 <p className='text-[23px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
// //                   Mollitia obcaecati unde velit facere earum ullam inventore eos, 
// //                   quo molestias ipsa aut modi voluptate ea eius doloribus sunt nemo 
// //                   quasi? Aspernatur, est doloribus neque architecto nulla repudiandae 
// //                   aperiam sed recusandae laudantium laborum temporibus assumenda in 
// //                   placeat possimus ut libero, ad dolorum!</p>

// //                 <div className='flex items-center gap-[44px] my-[40px]'>
// //                     <div className='bg-[#6397D2] px-[26px] py-[8px] text-[#fff] font-bold'>
// //                       <a href="#">Join for free</a>
// //                     </div>
// //                     <div className='flex gap-[16px]'>
// //                       <a href="#"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
// //                       <a href="#"><img className='w-[50px]' src={FacebookIcon} alt="" /></a>
// //                       <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
// //                       <a href="#"><img className='w-[50px]' src={TwitterIcon} alt="" /></a>
// //                     </div>
// //                 </div>
// //               </div>
// //           </div>
// //         </header>
// //         <main className='container'>
// //           <section>
// //              <div className='flex justify-between items-center bg-[#9FB5C9] rounded-[56px] h-[150px] px-[53px]'>
// //                <div>
// //                  <h3 className='text-[80px] font-bold text-[#fff]'>We have</h3>
// //                </div>
// //                <div className='flex text-[#fff] gap-[25px] text-[34px]'>
// //                  <div>
// //                    <h4>5+</h4>
// //                    <p>Experience</p>
// //                  </div>
// //                  <div>
// //                    <h4>5+</h4>
// //                    <p>Experience</p>
// //                  </div>
// //                </div>
// //              </div>
// //           </section>

// //           <section>
// //             <div className='flex items-center justify-around'>
// //               <div className='w-[400px] h-[2px] bg-[#000]'></div>
// //               <div className='text-[80px] text-[#fff] font-bold'>
// //                 <h2>Our Team</h2>
// //               </div>
// //               <div className='w-[400px] h-[2px] bg-[#000]'></div>
// //             </div>

// //             <div className='flex justify-around items-center text-center bg-[#fff] max-w-[1787px] w-full h-[600px] rounded-[33px] my-[45px]'>
// //               <div className=''>
// //                 <img className='px-[31px] max-w-[320px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
// //                 <p className='font-bold text-[34px] my-[21px]'>Name, Surname</p>
// //                 <div className='flex justify-center gap-[34px] my-[15px]'>
// //                   <a href="https://t.me/KamilovAzizbek" target="_blank"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
// //                   <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
// //                   <a href="#"><img className='w-[50px]' src={EmailIcon} alt="" /></a>
// //                   </div>
// //               </div>
// //               <div className=''>
// //                 <img className='px-[31px] max-w-[300px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
// //                 <p className='font-bold text-[34px] my-[21px]'>Name, Surname</p>
// //                 <div className='flex justify-center gap-[34px] my-[15px]'>
// //                   <a href="#"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
// //                   <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
// //                   <a href="#"><img className='w-[50px]' src={EmailIcon} alt="" /></a>
// //                   </div>
// //               </div>
// //               <div className=''>
// //                 <img className='px-[31px] max-w-[300px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
// //                 <p className='font-bold text-[34px] my-[21px]'>Name, Surname</p>
// //                 <div className='flex justify-center gap-[34px] my-[15px]'>
// //                   <a href="https://t.me/Munisakh23" target='_blank'><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
// //                   <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
// //                   <a href="#"><img className='w-[50px]' src={EmailIcon} alt="" /></a>
// //                   </div>
// //               </div>
// //             </div>
// //           </section>
// //         </main>
// //       </div>
// //     )
// //   }
// // }




// import React, { Component } from 'react'
// import TelegramIcon from '../assets/telegram-brands.svg';
// import User from '../assets/user-solid.svg';
// import InstaIcon from '../assets/instagram-brands.svg';
// import FacebookIcon from '../assets/square-facebook-brands.svg';
// import TwitterIcon from '../assets/twitter-brands.svg';
// import EmailIcon from '../assets/envelope-solid.svg';

// export default class Home extends Component {
//   render() {
//     return (
//       <div>
//         <header className='container mx-auto px-4'>
//           <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
//             <div className='hidden md:block'></div>
//             <div className='max-w-3xl text-center md:text-left'>
//               <h2 className='text-4xl md:text-6xl font-bold font-lato'>About Edu Center</h2>
//               <p className='text-base md:text-xl mt-4'>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati unde velit facere earum ullam inventore eos,
//                 quo molestias ipsa aut modi voluptate ea eius doloribus sunt nemo quasi? Aspernatur, est doloribus neque architecto nulla
//                 repudiandae aperiam sed recusandae laudantium laborum temporibus assumenda in placeat possimus ut libero, ad dolorum!
//               </p>

//               <div className='flex flex-col sm:flex-row items-center gap-6 mt-8'>
//                 <div className='bg-[#6397D2] px-6 py-2 text-white font-bold rounded-md'>
//                   <a href="#">Join for free</a>
//                 </div>
//                 <div className='flex gap-4'>
//                   <a href="#"><img className='w-10' src={TelegramIcon} alt="Telegram" /></a>
//                   <a href="#"><img className='w-10' src={FacebookIcon} alt="Facebook" /></a>
//                   <a href="#"><img className='w-10' src={InstaIcon} alt="Instagram" /></a>
//                   <a href="#"><img className='w-10' src={TwitterIcon} alt="Twitter" /></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className='container mx-auto px-4 mt-12'>
//           {/* Stats Section */}
//           <section className='bg-[#9FB5C9] rounded-3xl p-6 md:h-[150px] flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-6'>
//             <h3 className='text-4xl md:text-6xl font-bold'>We have</h3>
//             <div className='flex gap-8 text-2xl'>
//               <div>
//                 <h4 className='font-bold'>5+</h4>
//                 <p>Years Experience</p>
//               </div>
//               <div>
//                 <h4 className='font-bold'>10+</h4>
//                 <p>Professional Tutors</p>
//               </div>
//             </div>
//           </section>

//           {/* Team Section */}
//           <section className='mt-16'>
//             <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
//               <div className='w-1/4 h-[2px] bg-black'></div>
//               <h2 className='text-4xl md:text-6xl font-bold text-white'>Our Team</h2>
//               <div className='w-1/4 h-[2px] bg-black'></div>
//             </div>

//             <div className='flex flex-col lg:flex-row justify-center items-center gap-10 mt-10 bg-white rounded-[33px] p-6'>
//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className='text-center'>
//                   <img className='mx-auto w-60 h-80 bg-gray-500 rounded-[55px] object-cover' src={User} alt="Team member" />
//                   <p className='font-bold text-2xl mt-4'>Name, Surname</p>
//                   <div className='flex justify-center gap-4 mt-4'>
//                     <a href="#"><img className='w-10' src={TelegramIcon} alt="Telegram" /></a>
//                     <a href="#"><img className='w-10' src={InstaIcon} alt="Instagram" /></a>
//                     <a href="#"><img className='w-10' src={EmailIcon} alt="Email" /></a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </main>
//       </div>
//     )
//   }
// }



import React, { Component } from 'react'
import TelegramIcon from '../assets/telegram-brands.svg';
import User from '../assets/user-solid.svg';
import InstaIcon from '../assets/instagram-brands.svg';
import FacebookIcon from '../assets/square-facebook-brands.svg'
import TwitterIcon from '../assets/twitter-brands.svg';
import EmailIcon from '../assets/envelope-solid.svg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div></div>
            <div className='w-full md:w-[735px] font-bold font-lato text-center md:text-left'>
              <h2 className='text-[40px] sm:text-[50px] md:text-[63px]'>About Edu Center</h2>
              <p className='text-[18px] sm:text-[20px] md:text-[23px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Mollitia obcaecati unde velit facere earum ullam inventore eos, 
                quo molestias ipsa aut modi voluptate ea eius doloribus sunt nemo 
                quasi? Aspernatur, est doloribus neque architecto nulla repudiandae 
                aperiam sed recusandae laudantium laborum temporibus assumenda in 
                placeat possimus ut libero, ad dolorum!
              </p>

              <div className='flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[44px] my-[40px]'>
                <div className='bg-[#6397D2] px-[26px] py-[8px] text-[#fff] font-bold'>
                  <a href="#">Join for free</a>
                </div>
                <div className='flex gap-[16px]'>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={FacebookIcon} alt="" /></a>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={TwitterIcon} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className='container mx-auto px-4'>
          <section className='my-10'>
            <div className='flex flex-col md:flex-row justify-between items-center bg-[#9FB5C9] rounded-[56px] py-6 px-[20px] md:px-[53px] gap-4 md:gap-0'>
              <div>
                <h3 className='text-[50px] md:text-[80px] font-bold text-[#fff]'>We have</h3>
              </div>
              <div className='flex text-[#fff] gap-[25px] text-[24px] md:text-[34px]'>
                <div>
                  <h4>5+</h4>
                  <p>Experience</p>
                </div>
                <div>
                  <h4>5+</h4>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='flex flex-col md:flex-row items-center justify-around gap-4'>
              <div className='w-full md:w-[400px] h-[2px] bg-[#000]'></div>
              <div className='text-[50px] md:text-[80px] text-[#000] font-bold text-center'>
                <h2>Our Team</h2>
              </div>
              <div className='w-full md:w-[400px] h-[2px] bg-[#000]'></div>
            </div>

            <div className='flex flex-col lg:flex-row justify-around items-center text-center bg-[#fff] max-w-[1787px] w-full min-h-[600px] rounded-[33px] my-[45px] gap-8 px-4 py-6'>
              <div>
                <img className='px-[31px] max-w-[320px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
                <p className='font-bold text-[24px] md:text-[34px] my-[21px]'>Name, Surname</p>
                <div className='flex justify-center gap-[34px] my-[15px]'>
                  <a href="https://t.me/KamilovAzizbek" target="_blank"><img className='w-[40px] sm:w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={EmailIcon} alt="" /></a>
                </div>
              </div>
              <div>
                <img className='px-[31px] max-w-[320px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
                <p className='font-bold text-[24px] md:text-[34px] my-[21px]'>Name, Surname</p>
                <div className='flex justify-center gap-[34px] my-[15px]'>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={EmailIcon} alt="" /></a>
                </div>
              </div>
              <div>
                <img className='px-[31px] max-w-[320px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
                <p className='font-bold text-[24px] md:text-[34px] my-[21px]'>Name, Surname</p>
                <div className='flex justify-center gap-[34px] my-[15px]'>
                  <a href="https://t.me/Munisakh23" target='_blank'><img className='w-[40px] sm:w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[40px] sm:w-[50px]' src={EmailIcon} alt="" /></a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}