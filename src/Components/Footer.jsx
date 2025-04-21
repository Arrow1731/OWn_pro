// Components/Footer.js
import React from "react";
import TelegramIcon from '../assets/telegram-brands.svg';
// import User from '../assets/user-solid.svg';
import InstaIcon from '../assets/instagram-brands.svg';
import FacebookIcon from '../assets/square-facebook-brands.svg'
import TwitterIcon from '../assets/twitter-brands.svg';
// import EmailIcon from '../assets/envelope-solid.svg';

function Footer() {
  return (
    <footer className="container my-[50px]">
      <div>
            <div className='flex items-center justify-between font-bold font-lato'>
              <div>
                <h3 className='text-[50px]'>Contact Us</h3>
              </div>
              <div className='bg-[#000] w-[850px] h-[2px]'></div>
            </div>
            <div className='bg-[#fff] my-[45px] rounded-[43px] h-[500px] font-lato'>
              <div className='text-center text-[50px] '>
                  <h3>Savol yoki Takliflaringizni yozib qoldirishingiz <br /> mumkin!</h3>
              </div>
              <div className='flex justify-around items-center my-[60px]'>
                <div className=''>
                  <input className='bg-[#918A8A] rounded-lg text-[#fff] w-[410px] h-[50px] placeholder-[#fff] px-[21px] text-[25px]' type="text" name="" id="" placeholder='Ismingiz'/><br /><br />
                  <input className='bg-[#918A8A] rounded-lg text-[#fff] w-[410px] h-[50px] placeholder-[#fff] px-[21px] text-[25px]' type="text" name="" id="" placeholder='Telefon raqamingiz'/><br /><br />
                  <button className='bg-[#75E4DB] rounded-lg w-[410px] h-[50px] text-[25px]'><a type='submit' href="#">Jo’natish</a></button>
                </div>
                <div>
                  <textarea className='bg-[#918A8A] rounded-lg resize-none w-[600px] h-[210px] placeholder-[#fff] px-[36px] py-[20px] text-[25px]' name="" id="" placeholder='Izoh.......'></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#000]"></div>
          <div className="my-[70px]">
            <div className="flex justify-between items-center">
              <div className="max-w-[320px] w-full">
                <img src="" alt="Logo" />
                <h6><a href="#">+998 (94) - 350 - 17 -31</a></h6>
                <p className="py-[12px]"><a href="#">Toshkent shahar, Mirzo Ulugʻbek tumani, Muminov koʻchasi, 4A</a></p>
              </div>
              <div className="flex gap-[50px]">
                 <div>
                   <h4 className="font-bold font-lato text-[25px]">Linklar</h4>
                   <ul className="py-[21px]">
                    <a href="#"><li className="py-[15px]">Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li className="py-[15px]">Contact</li></a>
                    <a href="#"><li>Log In | Register</li></a>
                   </ul>
                 </div>
                 <div className="max-w-[320px] w-full">
                   <h4 className="font-bold font-lato text-[25px]">O’quv Markaz haqida</h4>
                   <p className="py-[34px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur laudantium voluptates cumque ipsum corporis facere ad repudiandae! In quis, facilis quidem sint veniam natus enim aspernatur voluptatibus maiores eveniet aliquam molestiae quos.</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#000]"></div>
          <div className="my-[45px]">
            <div className="flex justify-between items-center">
              <div className="text-[22px]">
                <p>© 2025 Powered by <a href="#"><span className="font-bold">AZIZBEK1701</span></a></p>
              </div>
              <div>
                <div className='flex gap-[16px]'>
                  <a href="#"><img className='w-[32px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[32px]' src={FacebookIcon} alt="" /></a>
                  <a href="#"><img className='w-[32px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[32px]' src={TwitterIcon} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
    </footer>
  );
}

export default Footer;
