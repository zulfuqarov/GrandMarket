import React, { useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const HomeCountr = () => {
    const [scrollUp, setscrollUp] = useState(false)

    const trueScrollUp = () => {
        setscrollUp(true)
    }
    const falseScrollUp = () => {
        setscrollUp(false)
    }

    return (
        <div className='container mx-auto px-[60px]'>
            <ScrollTrigger
                onEnter={trueScrollUp}
                onExit={falseScrollUp}
            >
                <div className='grid grid-cols-4 gap-4 pt-[80px] max-[1024px]:grid-cols-3 max-[991px]:grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:gap-2'>
                    <div className='flex  flex-col justify-evenly items-center border-solid rounded-xl border-[2px] h-[200px] border-gray-500'>
                        <p className='text-[26px] font-bold text-gray-600'>Market Sayı </p>
                        <span className='inline-block text-[32px] font-bold text-blue-600'>
                            <i className="pr-[20px] text-black text-[32px] fa-solid fa-shop"></i>
                            {scrollUp && (
                                <CountUp start={0} end={60} duration={2} delay={0} />
                            )}
                        </span>
                    </div>
                    <div className='flex  flex-col justify-evenly items-center border-solid rounded-xl border-[2px] h-[200px] border-gray-500'>
                        <p className='text-[26px] font-bold text-gray-600'>Region</p>
                        <span className='inline-block text-[32px] font-bold text-blue-600'>
                            <i className="pr-[20px] text-black text-[32px] fa-solid fa-map-location"></i>
                            {scrollUp && (
                                <CountUp start={0} end={30} duration={2} delay={0} />
                            )}
                        </span>
                    </div>
                    <div className='flex  flex-col justify-evenly items-center border-solid rounded-xl border-[2px] h-[200px] border-gray-500'>
                        <p className='text-[26px] font-bold text-gray-600'>Məhsul Sayı</p>
                        <span className='inline-block text-[32px] font-bold text-blue-600'>
                            <i className="pr-[20px] text-black text-[32px] fa-solid fa-utensils"></i>
                            {scrollUp && (
                                <CountUp start={0} end={10000} duration={2} delay={0} />
                            )} +
                        </span>
                    </div>
                    <div className='flex  flex-col justify-evenly items-center border-solid rounded-xl border-[2px] h-[200px] border-gray-500'>
                        <p className='text-[26px] font-bold text-gray-600'>Əməkdaş Sayı</p>
                        <span className='inline-block text-[32px] font-bold text-blue-600'>
                            <i className="pr-[20px] text-black text-[32px] fa-solid fa-user"></i>
                            {scrollUp && (
                                <CountUp start={0} end={5000} duration={2} delay={0} />
                            )} +
                        </span>
                    </div>
                </div>

            </ScrollTrigger>
        </div>
    )
}

export default HomeCountr