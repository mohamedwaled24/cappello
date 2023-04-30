import React from 'react'
import Button from './elements/Button'

const productDetailCard = ({product , onAddProduct }) => {


  return (
    <>

    {/* // product.category === catType[0] ? */}
    <div className='p-4 m-4 rounderd-lg bg-yellow-900'>
        <div className='flex flex-col items-center justify-between'>
            <h2 className='text-2xl font-bold text-white'> {product.productName}</h2>
            <p className='text-medium text-slate-200'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo illum adipisci inventore
                </p>
            <div className='flex justify-between items-center'>
                <div className='text-3xl text-white'>
                    {product.price}
                </div>
            </div>
        </div>
        <div className='w-full  items-center justify-center'>
            <img src={product.imgUrl} alt={product._id}  className='w-20 h-20 rounded-xl object-cover'/>
        </div>
        <div className='w-full flex  items-center justify-center'>
            <Button onClick={onAddProduct}>Add to cart</Button>
        </div>
      
    </div> 
     </>
    // :
    // <div> please choose category</div>
  )
}

export default productDetailCard
