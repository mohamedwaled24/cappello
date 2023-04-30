import React from 'react'
import banner from '../assets/banner.jpg'
import Button from '../components/elements/Button'


const Banner = () => {
  return (
    <div className='banner w-full md:w-2/3 px-7 mx-auto flex relative items-center justify-between'>
      <div className='banner-description w-full md:w-1/2 p-3'>
        <h2>Food Ordering Made Easy</h2>
        <p className='font-semibold text-lg text-red-600 py-2'>
          Get Started Today !
        </p>
        <div className='btn-container'>
          <Button>Order</Button>
          <a href='/menu' className='text-yellow-400 hover:text-yellow-500 text-decoration-line px-3 ' />
        </div>

      </div>
      <div className='banner-image w-full md:w-1/2 p-3'>
          <img src={banner} alt="banner-image" className='max-h-80'/>
      </div>
     
      
       </div>

  )
}

export default Banner
