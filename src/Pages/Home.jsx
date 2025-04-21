import React, { Component } from 'react'
// import Logo from './assets/Logo-Photoroom.png';
import TelegramIcon from '../assets/telegram-brands.svg';
import User from '../assets/user-solid.svg';
import InstaIcon from '../assets/instagram-brands.svg';
import FacebookIcon from '../assets/square-facebook-brands.svg'
import TwitterIcon from '../assets/twitter-brands.svg';
import EmailIcon from '../assets/envelope-solid.svg';
// import YouTubeIcon from './assets/youtube-brands.svg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className='container'>
          <div className='flex justify-between items-center'>
              <div></div>
              <div className='w-[735px] font-bold font-lato'>
                <h2 className='text-[63px]'>About Edu Center</h2>
                <p className='text-[23px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Mollitia obcaecati unde velit facere earum ullam inventore eos, 
                  quo molestias ipsa aut modi voluptate ea eius doloribus sunt nemo 
                  quasi? Aspernatur, est doloribus neque architecto nulla repudiandae 
                  aperiam sed recusandae laudantium laborum temporibus assumenda in 
                  placeat possimus ut libero, ad dolorum!</p>

                <div className='flex items-center gap-[44px] my-[40px]'>
                    <div className='bg-[#6397D2] px-[26px] py-[8px] text-[#fff] font-bold'>
                      <a href="#">Join for free</a>
                    </div>
                    <div className='flex gap-[16px]'>
                      <a href="#"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
                      <a href="#"><img className='w-[50px]' src={FacebookIcon} alt="" /></a>
                      <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
                      <a href="#"><img className='w-[50px]' src={TwitterIcon} alt="" /></a>
                    </div>
                </div>
              </div>
          </div>
        </header>
        <main className='container'>
          <section>
             <div className='flex justify-between items-center bg-[#9FB5C9] rounded-[56px] h-[150px] px-[53px]'>
               <div>
                 <h3 className='text-[80px] font-bold text-[#fff]'>We have</h3>
               </div>
               <div className='flex text-[#fff] gap-[25px] text-[34px]'>
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
            <div className='flex items-center justify-around'>
              <div className='w-[400px] h-[2px] bg-[#000]'></div>
              <div className='text-[80px] text-[#fff] font-bold'>
                <h2>Our Team</h2>
              </div>
              <div className='w-[400px] h-[2px] bg-[#000]'></div>
            </div>

            <div className='flex justify-around items-center text-center bg-[#fff] max-w-[1787px] w-full h-[600px] rounded-[33px] my-[45px]'>
              <div className=''>
                <img className='px-[31px] max-w-[320px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
                <p className='font-bold text-[34px] my-[21px]'>Name, Surname</p>
                <div className='flex justify-center gap-[34px] my-[15px]'>
                  <a href="https://t.me/KamilovAzizbek" target="_blank"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={EmailIcon} alt="" /></a>
                  </div>
              </div>
              <div className=''>
                <img className='px-[31px] max-w-[300px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
                <p className='font-bold text-[34px] my-[21px]'>Name, Surname</p>
                <div className='flex justify-center gap-[34px] my-[15px]'>
                  <a href="#"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={EmailIcon} alt="" /></a>
                  </div>
              </div>
              <div className=''>
                <img className='px-[31px] max-w-[300px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
                <p className='font-bold text-[34px] my-[21px]'>Name, Surname</p>
                <div className='flex justify-center gap-[34px] my-[15px]'>
                  <a href="https://t.me/Munisakh23" target='_blank'><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={EmailIcon} alt="" /></a>
                  </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
