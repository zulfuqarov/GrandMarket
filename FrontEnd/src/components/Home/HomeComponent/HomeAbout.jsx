import React from 'react'
import ButtonPromps from '../../../components/PrompsComponent/Button'
import { Link } from 'react-router-dom'
const HomeAbout = () => {
    return (
        <div className='container mx-auto pt-[80px]'>
            <div className='flex flex-col'>
                <div className='basis-2/6 flex justify-center items-center'>
                    <h1 className='text-[38px] text-gray-900 font-extrabold max-[768px]:text-[28px] max-[768px]:font-bold'>Nə üçün GRANDMART?</h1>
                </div>
                <div className='basis-4/6 pt-[60px]'>
                    <div className='flex justify-center items-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <svg className='w-[30px] h-[45px]' preserveAspectRatio="xMidYMid meet" data-bbox="0 0 35 52.22" viewBox="0 0 35 52.22" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs>
                            </defs>
                                <g>
                                    <path fill="#00ff00" d="M35 52.22l-18.17-7.81L0 52.22v-42h35v42z" data-color="1"></path>
                                    <path fill="#ffffff" d="M17.5 18.33l2.54 5.13 5.66.83-4.1 4 .97 5.64-5.07-2.66-5.07 2.66.97-5.64-4.1-4 5.66-.83 2.54-5.13z" data-color="2"></path>
                                    <path fill="#00ff00" d="M35 0v5H0V0h35z" data-color="1"></path>
                                </g>
                            </svg>
                            <h3 className='text-[28px] font-bold text-gray-800 mt-[15px]'>SƏRFƏLİ QİYMƏT</h3>
                        </div>
                    </div>
                    <div className='flex justify-evenly items-center pt-[50px] max-[640px]:flex-col'>
                        <div className='flex flex-col justify-center items-center'>
                            <svg className='w-[30px] h-[45px]' preserveAspectRatio="xMidYMid meet" data-bbox="0 0 35 52.22" viewBox="0 0 35 52.22" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs>
                            </defs>
                                <g>
                                    <path fill="#ca4249" d="M35 52.22l-18.17-7.81L0 52.22v-42h35v42z" data-color="1"></path>
                                    <path fill="#ffffff" d="M17.5 18.33l2.54 5.13 5.66.83-4.1 4 .97 5.64-5.07-2.66-5.07 2.66.97-5.64-4.1-4 5.66-.83 2.54-5.13z" data-color="2"></path>
                                    <path fill="#ca4249" d="M35 0v5H0V0h35z" data-color="1"></path>
                                </g>
                            </svg>
                            <h3 className='text-[28px] font-bold text-gray-800 mt-[15px]'>ÜSTÜN XİDMƏT</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center max-[640px]:pt-[50px]'>
                            <svg className='w-[30px] h-[45px]' preserveAspectRatio="xMidYMid meet" data-bbox="0 0 35 52.22" viewBox="0 0 35 52.22" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs>
                            </defs>
                                <g>
                                    <path fill="#00ccff" d="M35 52.22l-18.17-7.81L0 52.22v-42h35v42z" data-color="1"></path>
                                    <path fill="#ffffff" d="M17.5 18.33l2.54 5.13 5.66.83-4.1 4 .97 5.64-5.07-2.66-5.07 2.66.97-5.64-4.1-4 5.66-.83 2.54-5.13z" data-color="2"></path>
                                    <path fill="#00ccff" d="M35 0v5H0V0h35z" data-color="1"></path>
                                </g>
                            </svg>
                            <h3 className='text-[28px] font-bold text-gray-800 mt-[15px]'>RAHAT MÜHİT</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center pt-[60px]'>
                <div className='flex flex-row justify-center items-center basis-3/6'>
                    <p className='text-center text-[22px] text-gray-600 w-[600px] max-[768px]:w-[100%]'>
                        Paytaxt Bakı şəhərində ilk filialı ilə fəaliyyətə başlayan Grandmart supermarketlər şəbəkəsi bununla yanaşı ölkənin digər regionlarında da filial açılışlarını gerçəkləşdirmişdir.
                    </p>
                </div>
                <div className='basis-3/6 pt-[30px]'>
                    <Link to="/Branches"><ButtonPromps ButtonName='FİLİALLARIMIZ' /></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
