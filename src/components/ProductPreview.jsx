import React , {useEffect,useState}from 'react'
import axios from 'axios'
import ProductPreviewCart from './ProductPreviewCart';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useDispatch} from 'react-redux'
import {addToCart} from '../stores/cart/cartSlice'

const ProductPreview = () => {
    const [products,setProducts]=useState([]);
    const dispatch = useDispatch()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  useEffect(()=>{
    axios.get('http://localhost:5000/products')
    .then(response=>setProducts(response.data.products))
    .catch(e=>console.log(e))
   
    
  },[])
  console.log(products)
  const onAddProduct=(product)=>{
    dispatch(addToCart(product))

  }
  return (
    <div className='w-2/3 mx-auto pb-4 text-white bg-yellow-800'>
        <Carousel responsive={responsive}>

        {products && products.map((product,index)=>{
            return (
                <div className='w-full p-3'>
                    <ProductPreviewCart key={index} product={product} onAddProduct={onAddProduct}/>
                </div>
            )
        })}
        </Carousel>
      
    </div>
  )
}

export default ProductPreview
