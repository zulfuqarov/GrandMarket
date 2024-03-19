import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';

const AboutPartners = () => {

    const [PersonalState, setPersonalState] = useState(false)


    const fade = useSpring({
        opacity: PersonalState ? 1 : 0,
        config: { duration: 500 }, // Animasyon süresi (1 saniye)
    })
    const fade2 = useSpring({
        opacity: PersonalState ? 0 : 1,
        config: { duration: 500 }, // Animasyon süresi (1 saniye)
    })

    const ShowPersonal = () => {
        setPersonalState(true)
    }
    const ShowPersonal2 = () => {
        setPersonalState(false)
    }

    return (
        <div className='container mx-auto'>
            <section className='pt-[80px]'>
                <div className='w-full'>
                    <div className='flex justify-end pr-[30px]'>
                        <button onClick={ShowPersonal} className='w-[137px] h-[48px] text-center hover:bg-blue-700 transition-all rounded-lg bg-blue-500 text-white font-semibold'>
                            İdarə Heyyəti
                        </button>
                        <button onClick={ShowPersonal2} className='w-[137px] h-[48px] text-center hover:bg-blue-700 transition-all rounded-lg bg-blue-500 text-white font-semibold ml-[20px]'>
                            Departamentlər
                        </button>
                    </div>
                    <section className='pt-[40px]'>
                        {
                            PersonalState ?
                                <animated.div style={fade}>
                                    <div className=' grid grid-cols-3 max-[991px]:grid-cols-2 max-[768px]:grid-cols-1 gap-4'>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src="https://www.windsystemsmag.com/wp-content/uploads/Images/Articles/2015-Dec/1215-QA.jpg" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src="https://www.windsystemsmag.com/wp-content/uploads/Images/Articles/2015-Dec/1215-QA.jpg" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src="https://www.windsystemsmag.com/wp-content/uploads/Images/Articles/2015-Dec/1215-QA.jpg" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src="https://www.windsystemsmag.com/wp-content/uploads/Images/Articles/2015-Dec/1215-QA.jpg" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src="https://www.windsystemsmag.com/wp-content/uploads/Images/Articles/2015-Dec/1215-QA.jpg" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img src="https://www.windsystemsmag.com/wp-content/uploads/Images/Articles/2015-Dec/1215-QA.jpg" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>

                                    </div>
                                </animated.div>
                                : <animated.div style={fade2}>
                                    <div className='grid grid-cols-3 max-[991px]:grid-cols-2 max-[768px]:grid-cols-1 gap-4'>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img className='mx-auto w-[192px] h-[218px]' src="https://techprofile.blob.core.windows.net/images/5eB6Nz9xzUytChNVfJTYRA.png?8D981F" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img className='mx-auto w-[192px] h-[218px]' src="https://techprofile.blob.core.windows.net/images/5eB6Nz9xzUytChNVfJTYRA.png?8D981F" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img className='mx-auto w-[192px] h-[218px]' src="https://techprofile.blob.core.windows.net/images/5eB6Nz9xzUytChNVfJTYRA.png?8D981F" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img className='mx-auto w-[192px] h-[218px]' src="https://techprofile.blob.core.windows.net/images/5eB6Nz9xzUytChNVfJTYRA.png?8D981F" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img className='mx-auto w-[192px] h-[218px]' src="https://techprofile.blob.core.windows.net/images/5eB6Nz9xzUytChNVfJTYRA.png?8D981F" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img className='mx-auto w-[192px] h-[218px]' src="https://techprofile.blob.core.windows.net/images/5eB6Nz9xzUytChNVfJTYRA.png?8D981F" alt="" />
                                            <div className='flex flex-col justify-center items-center py-[10px]'>
                                                <p className='text-[23px] text-blue-500 font-extrabold'>Nəbi Zülfüqarov</p>
                                                <span className='text-[17px] text-black font-bold' >Malliyə direktoru</span>
                                            </div>
                                        </div>
                                    </div>
                                </animated.div>
                        }
                    </section>
                </div>
            </section >
        </div >
    )
}

export default AboutPartners