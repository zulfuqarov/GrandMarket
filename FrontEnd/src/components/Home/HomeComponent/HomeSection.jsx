import React from 'react'
import { Link } from 'react-router-dom'
const HomeSection = () => {
    return (

        <section >
            <div className='w-[100%] h-[200px] rounded-md flex flex-col justify-center items-center'>
                <h1 className='text-[34px] text-black font-extrabold'>ÜSTÜN XİDMƏT</h1>
                <p className='text-[22px] text-black font-semibold pt-[15px]'>GRANDMART Supermarketlər Şəbəkəsi</p>
            </div>
            <div className='container mx-auto'>
                <div className='flex flex-row space-x-5 max-[768px]:flex-col max-[768px]:space-x-0 pt-[80px]'>
                    <div className='HomeBgFon max-[768px]:py-[20px] max-[768px]:items-center basis-3/6 max-[1024px]:basis-2/6 flex flex-col justify-center  rounded-lg'>
                        <h1 className='text-[32px] max-[1024px]:text-[24px]  font-bold text-black px-[10px]'>
                            GRANDMART
                        </h1>
                        <p className='text-[19px] max-[1024px]:text-[17px] text-gray-500 font-semibold px-[10px] pt-[10px]'>
                            supermarketlər
                            şəbəkəsi
                        </p>
                        <Link to="/About" className='w-[150px] h-[40px]  mt-[20px] ml-[10px]  flex justify-center items-center rounded-lg transition-all bg-blue-500 hover:bg-black '>
                            <span className='inline-block  text-[17px] font-semibold text-white '>Haqqımızda</span>
                        </Link>
                    </div>
                    <div className='basis-3/6 max-[768px]:mt-[20px] max-[1024px]:basis-4/6'>
                        <div className='HomeBgFon2 basis-3/6 flex flex-col justify-center  rounded-lg'>
                            <span className='text-blue-500 font-bold text-[18px] pl-[10px]'>
                                Üstün Xidmət!
                            </span>
                            <p className='text-[19px] max-[768px]:text-[18px] text-gray-500 font-semibold pt-[10px] px-[10px]'>
                                Azərbaycan pərakəndə bazarında 20 ilə yaxındır fəaliyyət <br /> göstərən Grandmart supermarketlər şəbəkəsi  hazırda <br /> 30-dan yuxarı filialla müştərilərin ixtiyarındadır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeSection
