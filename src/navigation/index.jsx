import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PaymentSucces from '../pages/PaymentSuccess'
import Menu from '../pages/Menu'
import { useSelector } from 'react-redux'
import {cartProducts} from '../stores/cart/cartSlice'
import Footer from '../components/Footer'



const Navigation = () => {
    const productsInCart=useSelector(cartProducts)
    console.log(productsInCart)
    
    return (
        <BrowserRouter>
        <Header cartCount={productsInCart ? productsInCart.length : 0} />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/payment-success' element={<PaymentSucces/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/menu' element={<Menu/>}/>
        </Routes>
        <Footer />
        
    </BrowserRouter>
    )
    
    
}

export default  Navigation
