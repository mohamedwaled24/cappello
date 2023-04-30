import React from 'react'
import TabItems from './TabItems'

const Tabs = ({list , activeTab , onTabSwitch}) => {
    let active = activeTab === ' '? list[0] : activeTab
   
  return (
    <div className='sticky z-50 bg-white px-2'>
        <div className='container mx-auto flex align-center py-2 border-b-gray-400 border-b-2'>
            {list.map((item , index)=>{
                return(
                   <TabItems  
                   title={item}
                   key={index}
                   index={index}
                   active={active === item}
                   setActive={onTabSwitch}
                   />
                )
            })
                
            }
        </div>
      
    </div>
  )
}

export default Tabs

