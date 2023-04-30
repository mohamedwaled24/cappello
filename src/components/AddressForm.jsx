import React from 'react'
import {useForm} from 'react-hook-form'
import Button from '../components/elements/Button'
import {useDispatch} from 'react-redux'
import { setAddress } from '../stores/userInfo/addressSlice'

const AddressForm = ({onTabSwitch}) => {
    const {register , handleSubmit , formState:{errors}} = useForm();
    const dispatch =useDispatch()
    const onSubmit =(data)=>{
        dispatch(setAddress(data))
        console.log(data)
        onTabSwitch('Payment')
    }
  return (
    <form className='md:w-2/3 md:mx-auto px-3 pt-1' onSubmit={handleSubmit(onSubmit)}>
  
        <h3 className='pt-4 text-2xl md:text-center '> Address For The Delivery</h3>
        <div className='mb-4'>
            <label htmlFor="" className='block mb-2 text-sm font-bold text-gray-700 ' for="streetAddress">Street Address</label>
            <input type="text"  {...register('address' ,{required:true})} className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' 
            placeholder='Street Address'
            id='street address'
            />
            {
                errors.address&& <span className='text-red-500'>This Field Is required</span>
            }
        </div>
        <div className='mb-4 md:flex md:justify-between'>
            <div className='mb-4 md:mr-2 flex-1'>
                <label htmlFor="" className='blocl mb-2 text-sm font-bold text-gray-700 ' for="city">City</label>
                <input  type="text"  {...register('city')} 
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' 
                    placeholder='City'
                    id='city'/>
            </div>
            <div className='mb-4 md:mr-2 flex-1'>
                <label htmlFor="" className='blocl mb-2 text-sm font-bold text-gray-700 ' for="state">State</label>
                <input  type="text"  {...register('state')} 
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' 
                    placeholder='State'
                    id='state'/>
            </div>
        </div>

        <div className='mb-4 md:flex md:justify-between'>
            <div className='mb-4 md:mr-2 flex-1'>
                <label htmlFor="" className='blocl mb-2 text-sm font-bold text-gray-700 ' for="country">Country</label>
                <input  type="text"  {...register('country')} 
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' 
                    placeholder='Country'
                    id='country'/>
            </div>

            <div className='mb-4 md:mr-2 flex-1'>
                <label htmlFor="" className='blocl mb-2 text-sm font-bold text-gray-700 ' for="postalCode">PostalCode</label>
                <input  type="text"  {...register('postalCode')} 
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' 
                    placeholder='Postal Code'
                    id='postal code'/>
            </div>

        </div>
      
  
    <div className='flex justify-end p-2'> 
    <Button variant='dark' className='flex items-center' type='submit'> <span className='mr-2'>Next</span> </Button>
    </div>
    </form>
  )
}

export default AddressForm
