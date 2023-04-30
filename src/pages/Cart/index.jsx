import React from 'react'
import Tabs from '../../components/Tabs'
import {cartProducts} from '../../stores/cart/cartSlice'
import {useSelector} from 'react-redux'
import Button from '../../components/elements/Button'
import useTabSwitch from '../../../src/hooks/useTabSwitch'
import {selectAllProducts} from '../../stores/menu/productSlice'
import AddressForm from '../../components/AddressForm'
import ProductSummary from '../../components/ProductSummary'
import { StripeWrapper } from '../../components/PaymentForm'

const Cart = () => {
  const cart =useSelector(cartProducts)
  const tabs=['Summary' , 'Delivery' ,'Payment']
  const [currentTab , handleTabSwitch] =useTabSwitch(tabs , "Summary")
  console.log(cart)
  if(!cart || cart.length === 0){
    return (
      <div className='bg-white h-[100vh] text-black flex items-center justify-center p-4'>
        Your Cart Is Empty

      </div>
    )
  }
  console.log(cart)
  return (
    <div className='bg-white h-screen text-black mx-auto mt-2 border-gray-200 p-4 md:w-2/3  rounded-lg shadow-md sm:p-6 lg:p-8'>
      <Tabs  list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab}  />
      <div className={`tabs ${currentTab !== 'Summary' ? "hidden" : ''}`}>
        Summary
        <ProductSummary />
        <div className='flex justify-end p-2'> 
          <Button variant='dark' className='flex items-center' onClick={()=>{handleTabSwitch('Delivery')}}> <span className='mr-2'>Next</span> </Button>
        </div>
      </div>
      <div className={`tabs ${currentTab !== 'Delivery' ? "hidden" : ''}`}>
        Delivery
        <AddressForm onTabSwitch={handleTabSwitch}/>

      </div>
      <div className={`tabs ${currentTab !== 'Payment' ? "hidden" : ''}`}>
        <StripeWrapper />
      </div>
    </div>
  )
}

export default Cart
