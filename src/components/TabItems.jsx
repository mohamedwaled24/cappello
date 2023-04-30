import React from 'react'

const TabItems = ({title , index , active , setActive}) => {
    const className= active ? 'border-b-yellow-400' : 'border-none text-slate-400'
  return (
    <div className='nav-item py-2 px-4'>
       
        <button onClick={()=>{setActive(title)}} className='pt-7 pb-3'>
            
            <span className={`hover:text-yellow transition-colors border-b-2 ${className}`}>
                {title.toUpperCase()}
            </span>
        </button>
        
      
    </div>
  )
}

export default TabItems
