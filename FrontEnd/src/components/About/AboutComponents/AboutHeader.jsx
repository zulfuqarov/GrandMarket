import React from 'react'

const AboutHeader = () => {
    return (
        <header>
            <div className='AboutBgFon flex flex-col justify-center items-left pl-[80px] max-[991px]:pl-[40px] max-[768px]:pl-[10px]'>
                <h1 className='text-[44px] text-blue-500 font-semibold max-[768px]:text-[32px]'>Haqqımızda</h1>
                <span className='text-[22px] mt-[30px]  text-blue-500 font-semibold max-[768px]:text-[19px] max-[768px]:w-[230px]'>30-dan yuxarı mağaza ilə xidmətinizdəyik!</span>
            </div>
        </header>
    )
}

export default AboutHeader