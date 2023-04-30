import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectAllProducts } from '../../stores/menu/productSlice'
import { useEffect } from 'react'
import ProductDetailCard from '../../components/ProductDetailCard'
import Tabs from '../../components/Tabs'
import {addToCart} from '../../stores/cart/cartSlice'



const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts)
  const [activeTab ,setActiveTab]=useState('')
  const [ActiveTabIndex , setActiveTabIndex]=useState(0)

  
useEffect(()=>{
dispatch(fetchProducts())
},[dispatch])
const onAddProduct=(product)=>{
  dispatch(addToCart(product))

}
const onTabSwitch = (newActiveTab)=>{

  setActiveTab(newActiveTab)
 let newIndex=0;
  let categories=products.products.map((product)=>product.name)
  let index=categories.findIndex(category=>newActiveTab === category)
  if(index >-1){
    setActiveTabIndex(index)
  }else{
     setActiveTabIndex(0)
  }


}


  return (
    <div>
    
        {
          products.status !=='fulfilled'?
          <div> ... loading</div> :
          <div className='menu-wrapper'>
            {
              products.products && 
              <Tabs 
              list={products.products.map((product)=>product.name)}
              activeTab={activeTab}
              onTabSwitch={onTabSwitch}

              />
            }
            <div className='grid md:grid-cols-4 m-2'>

            {
              products.products && products.products[ActiveTabIndex].products.map((product , index)=>{
                return(
                 
                    
                    <ProductDetailCard onTabSwitch={onTabSwitch} product={product} key={product._id}  onAddProduct={onAddProduct}/>
                  
               
                )
              })
            }
            </div>
          </div>
        }
      
    </div>
  )
}

export default Menu
