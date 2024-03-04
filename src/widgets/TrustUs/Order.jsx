import React from 'react'
import CustomButton from '../../shared/ui/button/CustomButton'

const Order = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center h-[450px] bg-[#DC6441]">
      <div className='w-[1720px] h-[450px] mx-auto flex justify-center items-center'>
        <div className='w-[1164px] h-[221px] text-center'>
          <h3 className='text-[50px] font-semibold font-montserrat text-[#780000] mb-[20px]'>Попрощайтесь С Плохим Звуком Навсегда</h3>
          <p className='text-[22px] font-medium font-montserrat text-[#A02828] mb-[73px]'>Теперь артисты и музыканты могут звучать профессионально на своей первой сессии.</p>
          <CustomButton txt= "Забронировать" />
        </div>  
      </div>
  
    </div>
  )
}

export default Order