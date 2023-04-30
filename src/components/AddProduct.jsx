import React from 'react'

const AddProduct = ({onAddProduct}) => {
  return (
    <div className='flex items-end'>
        <button onClick={onAddProduct} className='bg-yellow-400 hover:bg-yellow-600 rounded-full w-5 h-5 flex items-center justify-center text-lg'><span>+</span></button>
      
    </div>
  )
}

export default AddProduct
