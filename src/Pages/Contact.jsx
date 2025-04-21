import React, { Component } from 'react'
import Map from '../assets/map.png';

export default class Contact extends Component {
  render() {
    return (
      <div className='container my-[40px]'>
        <div className='flex justify-between items-center'>
          <div>
            <h3>Bizning Manzil:</h3>
            <p><a href="#">Toshkent shahar, Mirzo Ulugʻbek tumani, Muminov koʻchasi, 4A</a></p>
          </div>
          <div>
            {/* <img className='w-[730px]' src={Map} alt="" /> */}
            <p>Img Not Found</p>
          </div>
        </div>
      </div>
    )
  }
}
