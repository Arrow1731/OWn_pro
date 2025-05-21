// // // // // import React from "react";
// // // // // import TelegramIcon from '../assets/telegram-brands.svg';
// // // // // import InstaIcon from '../assets/instagram-brands.svg';
// // // // // import FacebookIcon from '../assets/square-facebook-brands.svg';
// // // // // import TwitterIcon from '../assets/twitter-brands.svg';

// // // // // function Footer() {
// // // // //   return (
// // // // //     <footer className="container mx-auto my-12 px-4">
// // // // //       {/* Contact Section */}
// // // // //       <div>
// // // // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between font-bold font-lato">
// // // // //           <h3 className="text-[40px] md:text-[50px] mb-4 md:mb-0">Contact Us</h3>
// // // // //           <div className="bg-black w-full md:w-[850px] h-[2px]"></div>
// // // // //         </div>

// // // // //         {/* Contact Form */}
// // // // //         <div className="bg-white my-12 rounded-[30px] p-6 md:p-12 font-lato">
// // // // //           <h3 className="text-center text-[32px] md:text-[40px]">
// // // // //             Savol yoki Takliflaringizni yozib qoldirishingiz <br /> mumkin!
// // // // //           </h3>

// // // // //           <div className="flex flex-col md:flex-row justify-around items-center gap-12 mt-12">
// // // // //             {/* Inputs */}
// // // // //             <div className="flex flex-col gap-6">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Ismingiz"
// // // // //                 className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-3 text-xl"
// // // // //               />
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Telefon raqamingiz"
// // // // //                 className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-3 text-xl"
// // // // //               />
// // // // //               <button className="bg-[#75E4DB] text-black rounded-lg px-6 py-3 text-xl font-bold">
// // // // //                 Jo’natish
// // // // //               </button>
// // // // //             </div>

// // // // //             {/* Textarea */}
// // // // //             <textarea
// // // // //               placeholder="Izoh......."
// // // // //               className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-4 text-xl resize-none w-full md:w-[600px] h-[210px]"
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Divider */}
// // // // //       <div className="w-full h-[2px] bg-black"></div>

// // // // //       {/* Footer Info */}
// // // // //       <div className="my-16">
// // // // //         <div className="flex flex-col lg:flex-row justify-between gap-12">
// // // // //           {/* Left */}
// // // // //           <div className="max-w-[320px]">
// // // // //             {/* <img src="" alt="Logo" /> */}
// // // // //             <h6><a href="#">+998 (94) - 350 - 17 - 31</a></h6>
// // // // //             <p className="py-3">
// // // // //               <a href="#">Toshkent shahar, Mirzo Ulugʻbek tumani, Muminov koʻchasi, 4A</a>
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Links and About */}
// // // // //           <div className="flex flex-col md:flex-row gap-12">
// // // // //             <div>
// // // // //               <h4 className="font-bold text-[22px] md:text-[25px]">Linklar</h4>
// // // // //               <ul className="pt-6 space-y-4">
// // // // //                 <li><a href="#">Home</a></li>
// // // // //                 <li><a href="#">About</a></li>
// // // // //                 <li><a href="#">Contact</a></li>
// // // // //                 <li><a href="#">Log In | Register</a></li>
// // // // //               </ul>
// // // // //             </div>
// // // // //             <div className="max-w-[320px]">
// // // // //               <h4 className="font-bold text-[22px] md:text-[25px]">O’quv Markaz haqida</h4>
// // // // //               <p className="pt-6">
// // // // //                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur laudantium
// // // // //                 voluptates cumque ipsum corporis facere ad repudiandae...
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Divider */}
// // // // //       <div className="w-full h-[2px] bg-black"></div>

// // // // //       {/* Bottom Section */}
// // // // //       <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
// // // // //         <p className="text-lg text-center md:text-left">
// // // // //           © 2025 Powered by <a href="#"><span className="font-bold">AZIZBEK1701</span></a>
// // // // //         </p>
// // // // //         <div className="flex gap-4">
// // // // //           <a href="#"><img className="w-8" src={TelegramIcon} alt="Telegram" /></a>
// // // // //           <a href="#"><img className="w-8" src={FacebookIcon} alt="Facebook" /></a>
// // // // //           <a href="#"><img className="w-8" src={InstaIcon} alt="Instagram" /></a>
// // // // //           <a href="#"><img className="w-8" src={TwitterIcon} alt="Twitter" /></a>
// // // // //         </div>
// // // // //       </div>
// // // // //     </footer>
// // // // //   );
// // // // // }

// // // // // export default Footer;



















// // // // import React, { useState } from "react";
// // // // import TelegramIcon from '../assets/telegram-brands.svg';
// // // // import InstaIcon from '../assets/instagram-brands.svg';
// // // // import FacebookIcon from '../assets/square-facebook-brands.svg';
// // // // import TwitterIcon from '../assets/twitter-brands.svg';

// // // // function Footer() {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     phone: "",
// // // //     message: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     const { name, phone, message } = formData;

// // // //     if (!name || !phone || !message) {
// // // //       alert("Iltimos, barcha maydonlarni to‘ldiring.");
// // // //       return;
// // // //     }

// // // //     const token = '7650804370:AAHUfrp4LH5SUJpU1lt5gZxSb1pL_bm665g';
// // // //     const chat_id = '6536432455'; 

// // // //     const text = `📩 Yangi murojaat!\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n💬 Xabar: ${message}`;

// // // //     const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`;

// // // //     try {
// // // //       await fetch(url);
// // // //       alert("Xabaringiz muvaffaqiyatli yuborildi!");
// // // //       setFormData({ Ismi: "", Telefon: "", Xabar: "" });
// // // //     } catch (err) {
// // // //       alert("Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.");
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <footer className="container mx-auto my-12 px-4">
// // // //       {/* Contact Section */}
// // // //       <div>
// // // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between font-bold font-lato">
// // // //           <h3 className="text-[40px] md:text-[50px] mb-4 md:mb-0">Contact Us</h3>
// // // //           <div className="bg-black w-full md:w-[850px] h-[2px]"></div>
// // // //         </div>

// // // //         {/* Contact Form */}
// // // //         <div className="bg-white my-12 rounded-[30px] p-6 md:p-12 font-lato">
// // // //           <h3 className="text-center text-[32px] md:text-[40px]">
// // // //             Savol yoki Takliflaringizni yozib qoldirishingiz <br /> mumkin!
// // // //           </h3>

// // // //           <form
// // // //             onSubmit={handleSubmit}
// // // //             className="flex flex-col md:flex-row justify-around items-center gap-12 mt-12"
// // // //           >
// // // //             {/* Inputs */}
// // // //             <div className="flex flex-col gap-6 w-full md:w-[300px]">
// // // //               <input
// // // //                 type="text"
// // // //                 name="name"
// // // //                 value={formData.name}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Ismingiz"
// // // //                 className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-3 text-xl"
// // // //               />
// // // //               <input
// // // //                 type="text"
// // // //                 name="phone"
// // // //                 value={formData.phone}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Telefon raqamingiz"
// // // //                 className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-3 text-xl"
// // // //               />
// // // //               <button
// // // //                 type="submit"
// // // //                 className="bg-[#75E4DB] text-black rounded-lg px-6 py-3 text-xl font-bold"
// // // //               >
// // // //                 Jo’natish
// // // //               </button>
// // // //             </div>

// // // //             {/* Textarea */}
// // // //             <textarea
// // // //               name="message"
// // // //               value={formData.message}
// // // //               onChange={handleChange}
// // // //               placeholder="Izoh......."
// // // //               className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-4 text-xl resize-none w-full md:w-[600px] h-[210px]"
// // // //             />
// // // //           </form>
// // // //         </div>
// // // //       </div>

// // // //       {/* Divider */}
// // // //       <div className="w-full h-[2px] bg-black"></div>

// // // //       {/* Footer Info */}
// // // //       <div className="my-16">
// // // //         <div className="flex flex-col lg:flex-row justify-between gap-12">
// // // //           {/* Left */}
// // // //           <div className="max-w-[320px]">
// // // //             <h6><a href="#">+998 (94) - 350 - 17 - 31</a></h6>
// // // //             <p className="py-3">
// // // //               <a href="#">Toshkent shahar, Mirzo Ulugʻbek tumani, Muminov koʻchasi, 4A</a>
// // // //             </p>
// // // //           </div>

// // // //           {/* Links and About */}
// // // //           <div className="flex flex-col md:flex-row gap-12">
// // // //             <div>
// // // //               <h4 className="font-bold text-[22px] md:text-[25px]">Linklar</h4>
// // // //               <ul className="pt-6 space-y-4">
// // // //                 <li><a href="#">Home</a></li>
// // // //                 <li><a href="#">About</a></li>
// // // //                 <li><a href="#">Contact</a></li>
// // // //                 <li><a href="#">Log In | Register</a></li>
// // // //               </ul>
// // // //             </div>
// // // //             <div className="max-w-[320px]">
// // // //               <h4 className="font-bold text-[22px] md:text-[25px]">O’quv Markaz haqida</h4>
// // // //               <p className="pt-6">
// // // //                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur laudantium
// // // //                 voluptates cumque ipsum corporis facere ad repudiandae...
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Divider */}
// // // //       <div className="w-full h-[2px] bg-black"></div>

// // // //       {/* Bottom Section */}
// // // //       <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
// // // //         <p className="text-lg text-center md:text-left">
// // // //           © 2025 Powered by <a href="#"><span className="font-bold">AZIZBEK1701</span></a>
// // // //         </p>
// // // //         <div className="flex gap-4">
// // // //           <a href="#"><img className="w-8" src={TelegramIcon} alt="Telegram" /></a>
// // // //           <a href="#"><img className="w-8" src={FacebookIcon} alt="Facebook" /></a>
// // // //           <a href="#"><img className="w-8" src={InstaIcon} alt="Instagram" /></a>
// // // //           <a href="#"><img className="w-8" src={TwitterIcon} alt="Twitter" /></a>
// // // //         </div>
// // // //       </div>
// // // //     </footer>
// // // //   );
// // // // }

// // // // export default Footer;















// // // import React, { useState } from "react";

// // // function Footer() {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     phone: "",
// // //     message: "",
// // //   });

// // //   const [successMessage, setSuccessMessage] = useState(false);

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const { name, phone, message } = formData;

// // //     if (!name || !phone || !message) {
// // //       setSuccessMessage({ type: "error", text: "Iltimos, barcha maydonlarni to‘ldiring." });
// // //       return;
// // //     }

// // //     const token = '7650804370:AAHUfrp4LH5SUJpU1lt5gZxSb1pL_bm665g'; // Replace with your bot token
// // //     const chat_id = '6536432455'; // Replace with your chat ID

// // //     const text = `📩 Yangi murojaat!\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n💬 Xabar: ${message}`;

// // //     const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`;

// // //     try {
// // //       await fetch(url);
// // //       setFormData({ name: "", phone: "", message: "" }); // Clear form
// // //       setSuccessMessage({ type: "success", text: "Xabaringiz muvaffaqiyatli yuborildi!" });

// // //       // Hide message after 4 seconds
// // //       setTimeout(() => setSuccessMessage(false), 4000);
// // //     } catch (err) {
// // //       console.error(err);
// // //       setSuccessMessage({ type: "error", text: "Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring." });

// // //       setTimeout(() => setSuccessMessage(false), 4000);
// // //     }
// // //   };

// // //   return (
// // //     <footer className="container mx-auto my-12 px-4 relative">

// // //       {/* ✅ Custom Alert Box */}
// // //       {successMessage && (
// // //         <div
// // //           className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg text-white text-lg font-semibold transition-all duration-500 ${
// // //             successMessage.type === "success" ? "bg-green-500" : "bg-red-500"
// // //           }`}
// // //         >
// // //           {successMessage.text}
// // //         </div>
// // //       )}

// // //       {/* FORM SECTION */}
// // //       <div className="bg-white my-12 rounded-[30px] p-6 md:p-12 font-lato">
// // //         <h3 className="text-center text-[32px] md:text-[40px]">
// // //           Savol yoki Takliflaringizni yozib qoldirishingiz <br /> mumkin!
// // //         </h3>

// // //         <form
// // //           onSubmit={handleSubmit}
// // //           className="flex flex-col md:flex-row justify-around items-center gap-12 mt-12"
// // //         >
// // //           {/* Inputs */}
// // //           <div className="flex flex-col gap-6 w-full md:w-[300px]">
// // //             <input
// // //               type="text"
// // //               name="name"
// // //               value={formData.name}
// // //               onChange={handleChange}
// // //               placeholder="Ismingiz"
// // //               className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-3 text-xl"
// // //             />
// // //             <input
// // //               type="text"
// // //               name="phone"
// // //               value={formData.phone}
// // //               onChange={handleChange}
// // //               placeholder="Telefon raqamingiz"
// // //               className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-3 text-xl"
// // //             />
// // //             <button
// // //               type="submit"
// // //               className="bg-[#75E4DB] text-black rounded-lg px-6 py-3 text-xl font-bold hover:bg-[#62dad1] transition"
// // //             >
// // //               Jo’natish
// // //             </button>
// // //           </div>

// // //           {/* Textarea */}
// // //           <textarea
// // //             name="message"
// // //             value={formData.message}
// // //             onChange={handleChange}
// // //             placeholder="Izoh......."
// // //             className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-4 text-xl resize-none w-full md:w-[600px] h-[210px]"
// // //           />
// // //         </form>
// // //       </div>
      
// // //     </footer>
// // //   );
// // // }

// // // export default Footer;













import React, { useState } from "react";
import TelegramIcon from '../assets/telegram-brands.svg';
import InstaIcon from '../assets/instagram-brands.svg';
import FacebookIcon from '../assets/square-facebook-brands.svg';
import TwitterIcon from '../assets/twitter-brands.svg';

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;

    if (!name || !phone || !message) {
      setSuccessMessage({ type: "error", text: "Iltimos, barcha maydonlarni to‘ldiring." });
      return;
    }

    const token = '7650804370:AAHUfrp4LH5SUJpU1lt5gZxSb1pL_bm665g';
    const chat_id = '6536432455';
    const text = `📩 Yangi murojaat!\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n💬 Xabar: ${message}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`;

    try {
      await fetch(url);
      setFormData({ name: "", phone: "", message: "" });
      setSuccessMessage({ type: "success", text: "Xabaringiz muvaffaqiyatli yuborildi!" });
      setTimeout(() => setSuccessMessage(false), 4000);
    } catch (err) {
      console.error(err);
      setSuccessMessage({ type: "error", text: "Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring." });
      setTimeout(() => setSuccessMessage(false), 4000);
    }
  };

  return (
    <footer className="container mx-auto my-12 px-4 relative">

      {/* ✅ Alert Box */}
      {successMessage && (
        <div
          className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg text-white text-lg font-semibold transition-all duration-500 ${
            successMessage.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {successMessage.text}
        </div>
      )}

      {/* ✅ FORM Section */}
      <div className="bg-white my-12 rounded-[30px] p-6 md:p-12 font-lato">
        <h3 className="text-center text-[32px] md:text-[40px]">
          Savol yoki Takliflaringizni yozib qoldirishingiz <br /> mumkin!
        </h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-around items-center gap-12 mt-12"
        >
          <div className="flex flex-col gap-6 w-full md:w-[300px]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ismingiz"
              className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-3 text-xl"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon raqamingiz"
              className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-3 text-xl"
            />
            <button
              type="submit"
              className="bg-[#75E4DB] text-black rounded-lg px-6 py-3 text-xl font-bold hover:bg-[#62dad1] transition"
            >
              Jo’natish
            </button>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Izoh......."
            className="bg-[#918A8A] text-white placeholder-white rounded-lg px-6 py-4 text-xl resize-none w-full md:w-[600px] h-[210px]"
          />
        </form>
      </div>

      {/* ✅ Footer Info */}
      <div className="my-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Contact Info */}
          <div className="max-w-[320px]">
            <h6><a href="#">+998 (94) - 350 - 17 - 31</a></h6>
            <p className="py-3">
              <a href="#">Toshkent shahar, Mirzo Ulugʻbek tumani, Muminov koʻchasi, 4A</a>
            </p>
          </div>

          {/* Links & About */}
          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <h4 className="font-bold text-[22px] md:text-[25px]">Linklar</h4>
              <ul className="pt-6 space-y-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Log In | Register</a></li>
              </ul>
            </div>
            <div className="max-w-[320px]">
              <h4 className="font-bold text-[22px] md:text-[25px]">O’quv Markaz haqida</h4>
              <p className="pt-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur laudantium
                voluptates cumque ipsum corporis facere ad repudiandae...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Divider */}
      <div className="w-full h-[2px] bg-black"></div>

      {/* ✅ Bottom Bar */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-lg text-center md:text-left">
          © 2025 Powered by <a href="#"><span className="font-bold">AZIZBEK1701</span></a>
        </p>
        <div className="flex gap-4">
          <a href="#"><img className="w-8" src={TelegramIcon} alt="Telegram" /></a>
          <a href="#"><img className="w-8" src={FacebookIcon} alt="Facebook" /></a>
          <a href="#"><img className="w-8" src={InstaIcon} alt="Instagram" /></a>
          <a href="#"><img className="w-8" src={TwitterIcon} alt="Twitter" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
