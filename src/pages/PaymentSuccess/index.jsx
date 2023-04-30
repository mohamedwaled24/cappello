import React from 'react'
import { Alerts } from '../../components/Alert'
const PaymentSuccess = () => {
  return (
    <div className='max-w-lg mx-auto p-4'>
      <Alerts variants='success'>

      Your Payment Was Successfull
      </Alerts>
    </div>
  )
}

export default PaymentSuccess
