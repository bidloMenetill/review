import React from 'react'

function Button(props) {
  return (
    <button className='pr-[24px] pl-[24px] pt-[12px] pb-[12px] relative transition duration-300 bg-white text-white hover:text-orange hover:after:text-orange' data-text ={props.txt}>
              <a href=""></a>
             </button>
  )
}

export default Button