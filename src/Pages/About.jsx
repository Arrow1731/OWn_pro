import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='container font-lato'>
        <div className='text-center'>
          <h2 className='text-[43px] font-bold'>Biz Haqimizda</h2>
          <p className='text-[19px]'><span className='text-[23px]'>Zamonaviy ta’limga ilk qadam — biz bilan!</span> <br /> Bizning ta’lim markazimiz — bu raqamli davr talablariga javob beruvchi, bilim olish va uni baholash jarayonlarini
            engillashtiruvchi onlayn platformadir. Bizning maqsadimiz – o‘quvchilarga sifatli, qulay va adolatli ta’lim tizimini taqdim etish.
          </p>
        </div>
        <div className='flex justify-between items-center my-[50px]'>
          <div>
            <img src="" alt="" />
          </div>
          <div className='max-w-[640px]'>
            <h4 className='text-[25px] font-bold'>Markazimizda siz quyidagi imkoniyatlarga ega bo‘lasiz:</h4>
            <p className='text-[19px]'>
              📘 Turli yo‘nalishlar bo‘yicha onlayn imtihonlar topshirish <br />
              📊 Bilim darajangizni tezkor va shaffof baholash <br />
              🎓 Rasmiy sertifikatlar orqali o‘z yutuqlaringizni tasdiqlash <br />
              💡 O‘z ustingizda ishlash va yangi bilimlarga ega bo‘lish
            </p>
          </div>
        </div>

        <div>
          <div>
            <h5 className='text-center text-[37px] font-bold'>Onlayn imtihon tizimi</h5>
            <p className='text-center text-[20px]'>Bizning onlayn imtihon platformamiz orqali siz istalgan joyda, istalgan vaqtda bilimlaringizni sinab
              ko‘rishingiz mumkin. Har bir testlar to‘plami tajribali mutaxassislar tomonidan ishlab chiqilgan bo‘lib, o‘quvchilarning bilim va ko‘nikmalarini aniq baholashga xizmat qiladi.
            </p>
            <div>
              <div>
                <p className='text-[21px] font-bold my-[30px]'>
                  Imtihon jarayoni quyidagicha ishlaydi:
                </p>
                <p className='my-[19px] text-[18px]'>
                  1. Foydalanuvchi sifatida ro‘yxatdan o‘tasiz <br />
                  2. Fan va imtihon turini tanlaysiz <br />
                  3. Testlarni onlayn tarzda bajarib, natijani zudlik bilan olasiz <br />
                  4. Imtihon yakunida sizga rasmiy natijalar va sertifikat taqdim etiladi
                </p>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    )
  }
}
