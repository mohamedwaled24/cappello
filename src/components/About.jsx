import React from 'react'
import aboutUs from '../assets/aboutUs.jpg'

const About = () => {
  return (
    <div className='bg-white '>
        <div className='p-24 gird grid-cols-2'>
            <div className=''>
                <h2 className='text-2xl font-medium'>About Us</h2>
                <p className='text-lg'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet molestiae facere, iste a soluta exercitationem velit saepe aliquam dolor quasi temporibus, placeat quas dignissimos ullam laborum labore, adipisci eum. Harum?

                </p>
            </div>
            <div className='flex items-center justify-center'>
                <img src={aboutUs} alt='about us' className='w-[400px] h-[400px] object-cover'/>
            </div>
        </div>
      
    </div>
  )
}

export default About
