import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='container mx-auto px-4 font-lato my-10'>
        <div className='text-center'>
          <h2 className='text-[32px] sm:text-[43px] font-bold'>Biz Haqimizda</h2>
          <p className='text-[16px] sm:text-[19px] my-[10px]'>
            <span className='text-[18px] sm:text-[23px] font-semibold'>Zamonaviy ta’limga ilk qadam — biz bilan!</span> <br /><br />
            Bizning ta’lim markazimiz — bu raqamli davr talablariga javob beruvchi, bilim olish va uni baholash jarayonlarini engillashtiruvchi onlayn platformadir.
            Bizning maqsadimiz – o‘quvchilarga sifatli, qulay va adolatli ta’lim tizimini taqdim etish.
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center my-[50px] gap-6'>
          <div className='w-full md:w-1/2'>
            <img src="" alt="" className='w-full h-auto object-contain rounded-lg bg-gray-200' />
          </div>
          <div className='w-full md:w-1/2 max-w-[640px]'>
            <h4 className='text-[20px] sm:text-[25px] font-bold mb-3'>Markazimizda siz quyidagi imkoniyatlarga ega bo‘lasiz:</h4>
            <p className='text-[16px] sm:text-[19px] leading-relaxed'>
              📘 Turli yo‘nalishlar bo‘yicha onlayn imtihonlar topshirish <br />
              📊 Bilim darajangizni tezkor va shaffof baholash <br />
              🎓 Rasmiy sertifikatlar orqali o‘z yutuqlaringizni tasdiqlash <br />
              💡 O‘z ustingizda ishlash va yangi bilimlarga ega bo‘lish
            </p>
          </div>
        </div>

        <div>
          <h5 className='text-center text-[28px] sm:text-[37px] font-bold'>Onlayn imtihon tizimi</h5>
          <p className='text-center text-[16px] sm:text-[20px] my-[12px] px-2'>
            Bizning onlayn imtihon platformamiz orqali siz istalgan joyda, istalgan vaqtda bilimlaringizni sinab
            ko‘rishingiz mumkin. Har bir testlar to‘plami tajribali mutaxassislar tomonidan ishlab chiqilgan bo‘lib,
            o‘quvchilarning bilim va ko‘nikmalarini aniq baholashga xizmat qiladi.
          </p>

          <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-6 mt-6'>
            <div className='w-full md:w-1/2'>
              <p className='text-[18px] sm:text-[21px] font-bold mb-4'>
                Imtihon jarayoni quyidagicha ishlaydi:
              </p>
              <p className='text-[16px] sm:text-[18px] leading-relaxed'>
                1. Foydalanuvchi sifatida ro‘yxatdan o‘tasiz <br />
                2. Fan va imtihon turini tanlaysiz <br />
                3. Testlarni onlayn tarzda bajarib, natijani zudlik bilan olasiz <br />
                4. Imtihon yakunida sizga rasmiy natijalar va sertifikat taqdim etiladi
              </p>
            </div>
            <div className='w-full md:w-1/2'>
              <img src="" alt="" className='w-full h-auto object-contain rounded-lg bg-gray-200' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}