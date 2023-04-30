import React from 'react'
import { useDispatch } from 'react-redux'
import { increamentProductAmount,decreamentProductAmount } from '../stores/cart/cartSlice'

const ProductSummaryCard = ({product }) => {
    const dispatch=useDispatch()
  return (
    <div className='flex p-2 sm:p-2 border-b border-b-gray-200'>
        <div className='product-image mr-2 border border-gray-200 rounded-lg w-full sm:w-1/3 flex items-center justify-center'> 
        <img src={product.imgUrl} alt={product.productName} className='w-[50%] rounded-full '/>
        </div>
        <div className='product-info'>
            <h3>{product.productName}</h3>
             <p className='text-gray-600'>{product.productName}</p>
        </div>
        <div className='product-pric flex flex-col items-center justify-center'>
            <div className='price '>{`${product.price}$`}</div>
            <div className='quantity flex'>
                <button className='p-1'  onClick={()=>{dispatch(increamentProductAmount(product))}}>+</button>
                <span className='p-1'> {product.amount}</span>
                <button className='p-1' disabled={product.amount <=0} onClick={()=>{dispatch(decreamentProductAmount(product))}}>-</button>
                </div>


        </div>
      
    </div>
  )
}

export default ProductSummaryCard
