import React, { useState , useEffect} from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import {Link } from 'react-router-dom'
import {FaBars , FaTimes , FaGithub , FaLinkedin} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Button from './elements/Button'


const Header = ({cartCount}) => {
   const [isLoggedIn,setIsLoggedIn]=useState(false)
  const navigate=useNavigate()
  const handlelogOut=()=>{
    sessionStorage.removeItem('Auth Token')
    sessionStorage.removeItem('User Id')
    window.dispatchEvent(new Event("storage"))
    navigate('/')
  }
  useEffect(()=>{
    const checkAuthToekn =()=>{
      const token= sessionStorage.getItem('Auth Token')
      if(token){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
    }
    window.addEventListener('storage' , checkAuthToekn)
    return ()=>{
      window.addEventListener('storage' , checkAuthToekn)
    }
  })

  const [nav , setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)

  }
  return (
 

    <div className='container  w-full flex flex-wrap justify-between items-center mt-0 py-2 px-8'>
      
        <div className='logo-wrapper pl-4 flex items-center'>
            <Link to='/' className='no-underline hover:no-underline font-bold text-2xl lg:text-4xl'>
            <img src={logo} alt="" className='w-40 h-30 object-contain hover:rotate-360 duration-300 hover:scale-75' />
            </Link>
        </div>
        <div className='nav-items hidden md:flex items-center justify-between space-x-10 text-yellow-950 font-semibold'>
            <Link to='/' className='text-xl'>Home</Link>
            <Link to='#about' className='text-xl'>About</Link>
        </div>
        <div className='hidden md:flex items-center justify-center space-x-4  text-yellow-950 font-semibold'>
        <Link to='/cart' className='mr-4 relative '>
        <img src={cart} alt="cart" className='w-10' />
        {cartCount > 0 ? <div className='rounded-full w-5 bg-yellow-400 inline-flex text-white justify-center items-center absolute -top-1 right-1 '> {cartCount}</div> : ''}
        </Link>
        {
          isLoggedIn ? 
                 <Button onClick={handlelogOut}>Log Out</Button>  :
           
          <>
                <Link to='/login'>Log in</Link>
                <Link to='/register'>Sign up</Link>
          </>
        }
  

        </div>
        {/* Humburger */}
      <div className="md:hidden z-50 " onClick={handleNav}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile menu */}

      <ul
        className={
          !nav
            ? "absolute top-0 left-[-100%]"
            : " md:hidden duration-300 absolute top-0 left-0 w-full z-40 h-screen bg-[#45390a] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleNav}  to="/" smooth={true}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={handleNav}  to="#about" smooth={true}>
            About
          </Link>
        </li>

      </ul>


      
    </div>
    
  )
}

export default Header
