import React from 'react'

const Footer = () => {
  return (

    <footer className='bg-yellow-700'>
        <div className='gird grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4'>
            <div>
                <h2 className='mb-6 text-sm font-semibold text-gray-400 uppercase'>
                    cappello
                </h2>
                <ul className='text-gray-300'>
                    <li className='mb-4'>
                        <a  className="hover:underline" href="#">About</a>
                    </li>
                    <li className='mb-4'>
                        <a  className="hover:underline" href="/menu">Menu</a>
                    </li>
                    <li className='mb-4'>
                        <a  className="hover:underline" href="#">About</a>
                    </li>
                </ul>
            </div>
            <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-400 uppercase'>
                    Legal
                </h2>
                <ul className='text-gray-300'>
                    <li className='mb-4'>
                        <a  className="hover:underline" href="#">Privacy Policy</a>
                    </li>
                    <li className='mb-4'>
                        <a  className="hover:underline" href="#">Licensing</a>
                    </li>
                    <li className='mb-4'>
                        <a  className="hover:underline" href="#">Terms &amp: Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between'>
            <span className='text-sm text-gray-300 sm:text-center'>
                2022 Food Delivery , All Rights Reserved
            </span>
        </div>

    </footer>
  )
}

export default Footer
