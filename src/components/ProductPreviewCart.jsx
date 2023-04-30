import React from 'react'
import AddProduct from './AddProduct'


const ProductPreviewCart = ({product , onAddProduct}) => {
    const addProduct=()=>{
      onAddProduct(product)
    }
    
  return (
    <div className='w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center' key={product._id}>
        <img src={product.imgUrl} alt={product.productName} className='w-full max-h-40 items-center justify-center mx-auto' />
        <h2 className='pb-2 text-lg underline '>{product.productName}</h2>
        <p className='mb-2 h-20 line-clamp-4'>{product.price}</p>
        <AddProduct onAddProduct={addProduct} />
      
    </div>
  )
}

export default ProductPreviewCart
