import React from 'react'

const Button = ({ButtonName}) => {
    return (
        <button className='text-[19px] border-solid border-[3px] border-blue-400 font-bold w-[200px] h-[60px] hover:border-black hover:text-white hover:bg-blue-400  transition-all'>{ButtonName}</button>
    )
}

export default Button