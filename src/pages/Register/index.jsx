import {React ,  useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {toast, ToastContainer} from 'react-toastify'
import {app} from '../../firebase-config'
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'
import Button from '../../components/elements/Button'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  let navigate=useNavigate()
  const {register , handleSubmit} =useForm()
  const [loading , setLoading]=useState(false)

  const onSubmit=(data)=>{
    setLoading(true)
    const authentication =getAuth()
    let uid =''
    createUserWithEmailAndPassword(authentication , data.email , data.password)
    .then((response)=>{
      uid=response.user.uid
      sessionStorage.setItem('User Id' , uid)
      sessionStorage.setItem('Auth Token' , response._tokenResponse.refreshToken)
      window.dispatchEvent(new Event("storage"))
    })
    .catch((err)=>{
      if(err.code==='auth/email-already-in-use'){
        toast.error('Email Already In Use')
      }
    })
    fetch('http://localhost:5000/user/create-user' , {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:data.email,
        name:data.name,
        _id:uid
      })

    }).then((res)=>{
      if(res.status===200){
        setLoading(false)
        console.log(res.status)
        toast.success('Account Created Successfully!', {
          position:'top-right',
          autoClose:5000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
          theme:'dark'
        })
        navigate('/')
      }else{
        console.log(res.json())
      }
    }).catch((err)=>{
      console.log(err)
      setLoading(false)})
  }
  return (
    <div className='h-screen bg-black flex items-center justify-center'>
      <div className='rounded-lg max-w-md w-full flex flex-col items-center justify-center relative'>
         <div className='absolute inset-0 duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500'></div>
           <div className='p-10 rounded-xl z-10 w-full h-gull bg-black'>
            <h5 className='text-3xl'>Register</h5>
              <form action="" className='w-full space-y-6' onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className='block text-lg font-medium text-gray-200' >Name</label>
                  <input type="text" {...register('name')}
                  id='name' 
                  className='block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focuse:outline-none focuse:ring-gray-200 focus:border-gray-200' 
                  />
                </div>
                <div>
                  <label htmlFor="email" className='block text-lg font-medium text-gray-200' >Email</label>
                  <input type="text" {...register('email')}
                  id='email' 
                  className='block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focuse:outline-none focuse:ring-gray-200 focus:border-gray-200' 
                  />
                </div>
                <div>
                  <label htmlFor="password" className='block text-lg font-medium text-gray-200' >Password</label>
                  <input type="password" {...register('password')}
                  id='password' 
                  className='block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focuse:outline-none focuse:ring-gray-200 focus:border-gray-200' 
                  />
                </div>
              <Button size='large'> {loading ? 'Loading' :'Register' }</Button>
              </form>
              <ToastContainer />

         </div>
       </div>
    </div>
  )
}

export default Register
