import React from 'react'
import {CardElement , useElements , useStripe ,Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useSelector  , useDispatch} from 'react-redux'
import { clearCart ,cartProducts} from '../stores/cart/cartSlice'
import {clearAddress, getAddress } from '../stores/userInfo/addressSlice'
import {useNavigate} from 'react-router-dom';
import { useState , useEffect} from 'react' 
import Button from '../components/elements/Button'
const stripePromise=loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
export const StripeWrapper =()=>{
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}
const PaymentForm = () => {
    const [loading , setLoading]=useState(false)
    const [error,setError]=useState(null)
    const dispatch=useDispatch()
    const cart=useSelector(cartProducts)
    const address=useSelector(getAddress)
    const navigate = useNavigate()
    const elements=useElements()
    const stripe=useStripe()
    
    const handleSubmit =async(event)=>{
        event.preventDefault();
        console.log(event)
        if(!stripe || !elements || !cart?.length || !address){
            console.log('error')
            return ;
        }
        setLoading(true)
        try {
            const {error:backEndError , clientSecret}=await fetch('http://localhost:5000/create-payment-intent',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({
                    paymentMethodType:"card",
                    orderItems:cart,
                    userId:'',
                    shippingAddress:address
                })
            }).then(r=>r.json())
            const {error:stripeError , paymentIntent}=await stripe.confirmCardPayment(
                clientSecret, {
                    payment_method:{
                        card:elements.getElement(CardElement)
                    }
                }
            )
            if(backEndError || stripeError){
                setError(backEndError || stripeError)
            }else if(paymentIntent.status==='succeeded'){
                dispatch(clearAddress())
                dispatch(clearCart())
                navigate('/payment-success')
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

  return (
<form action="" className='md:w-2/3 md:mx-auto px-1 pt-1' id="payment-form" onSubmit={handleSubmit}>
    <label htmlFor="card-element" className='pt-2 text-2xl md:text-center'>Please Enter Your Card detail</label>
    <div className='my-4'>
        <CardElement id='card-element'/>
    </div>
    <div className='flex justify-center p-2'>
        <Button type="submit" disbaled={loading}>
            {
                loading ? 
                'Loading...' :
                'Pay Now'
            }
        </Button>

    </div>

</form>
  )
}

export default PaymentForm
