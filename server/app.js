const express = require('express')
const cors=require("cors")
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express()
const port=5000
const productRoute=require('./routes/productRoute')
const userRoute=require('./routes/userRoute')
const dotenv =require('dotenv').config({path:'../.env'})
const stripe =require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = 'whsec_666e9e4fab94224324e4b47016b390acca16c5352cf9c05600d9b239d9782a26'


const Order =require('./models/Order')
const User =require('./models/User')
const calculateOrderAmount=(orderItems)=>{
     const initialValue = 0;
     const itemsPrice = orderItems.reduce(
        (previousValye,currentValue)=>
            previousValye+currentValue.price *currentValue.amount , initialValue
        
     );
     return itemsPrice*100
}
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(
    express.json({
        verify:function(req,res,buf){
            if(req.originalUrl.startWith('/webhook')){
                req.rawBody = buf.toString();
            }

        }
    })
)

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
    let event = request.body;
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers['stripe-signature'];
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }
    }
  
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case 'payment_method.attached':
        const paymentMethod = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
  
    // Return a 200 response to acknowledge receipt of the event
    response.send();
  });

app.use("/",productRoute)
app.use('/user',userRoute)
app.post('/create-payment-intent' ,async(req,res)=>{
    try {
        const { orderItems,
            shippingAdsress,
            userId
        } =req.body
            const taxPrice=0;
            const shippingPrice=0;
        const totalPrice = calculateOrderAmount(orderItems);

        const order=new Order({
            orderItems,
            shippingAdsress,
            paymentMethod:'stripe',
            totalPrice,
            taxPrice,
            shippingPrice,
            user:''
        })
        console.log(order)
        // await order.save()
        const paymentIntent=await stripe.paymentIntents.create({
            amount:totalPrice,
            currency:'usd'
        })
        res.send({
            clientSecret:paymentIntent.client_secret
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: {
                message :error.message
            }
        })
    }

})

app.get('/',(req,res)=>{
    res.status(200).json('hello world')
})


mongoose.connect('mongodb+srv://wello:Wello.123@cluster0.8zccmpy.mongodb.net/cappello')
.then((res)=>{console.log('db connected')})
.catch((err)=>console.log(err))




app.listen(process.env.PORT || port,()=>{
    console.log(`server is running on port ${port}`)
})