import React, { Component } from 'react'
import Map from '../assets/map.png';

export default class Contact extends Component {
  render() {
    return (
      <div className='container mx-auto px-4 my-[40px] font-lato'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
          <div className='w-full md:w-1/2'>
            <h3 className='text-[24px] font-bold mb-2'>Bizning Manzil:</h3>
            <p className='text-[18px]'>
              <a href="#" className='text-blue-600 hover:underline'>
                Toshkent shahar, Mirzo Ulugʻbek tumani, Muminov koʻchasi, 4A
              </a>
            </p>
          </div>
          <div className='w-full md:w-1/2'>
            {
              Map ? (
                <img
                  src={Map}
                  alt="Bizning Manzil - xarita"
                  className='w-full h-auto object-contain rounded-lg shadow-md'
                />
              ) : (
                <p className='text-red-500'>Rasm topilmadi</p>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}


