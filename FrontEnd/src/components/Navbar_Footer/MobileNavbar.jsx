import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MobileNavbar = ({ OpenMobileNavbar }) => {
    const url = useLocation()

    return (
        <div className='w-full h-[100vh] top-0 bg-white z-10 fixed  overflow-hidden '>
            <div className='flex justify-between items-center pt-[20px]'>
                <div>
                    <Link to="" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
                        <img className="" src="https://static.wixstatic.com/media/ae716c_3c71723485e14966bc32032bfd7b8db6~mv2.png/v1/crop/x_135,y_0,w_858,h_440/fill/w_127,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/grand_logo-2.png" alt="" />
                    </Link>
                </div>
                <div>
                    <i onClick={OpenMobileNavbar} className="fa-solid fa-xmark pr-[30px] text-[32px] cursor-pointer"></i>
                </div>
            </div>
            <div className='flex flex-col h-[70%] '>
                <ul className="flex flex-col items-center w-full h-full justify-around  ml-4 xl:ml-8 mr-auto">
                    <li className={`p-3 xl:p-6  ${url.pathname === '/' ? 'text-blue-600' : ''}`}>
                        <Link to="/">
                            <span className='text-[22px] font-semibold'>Ana-Səhifə</span>
                        </Link>
                    </li>
                    <li className={`p-3 xl:p-6 ${url.pathname === '/About' ? 'text-blue-600' : ''}`}>
                        <Link to="/About">
                            <span className='text-[22px] font-semibold'>HAQQIMIZDA</span>
                        </Link>
                    </li>
                    <li className={`p-3 xl:p-6 ${url.pathname === '/Branches' ? 'text-blue-600' : ''}`}>
                        <Link to="/Branches">
                            <span className='text-[22px] font-semibold'>FİLİALLAR</span>
                        </Link>
                    </li>
                    <li className={`p-3 xl:p-6 ${url.pathname === '/Discounts' ? 'text-blue-600' : ''}`}>
                        <Link to="/Discounts">
                            <span className='text-[22px] font-semibold'>ENDİRİMLƏR</span>
                        </Link>
                    </li>
                    <li className={`p-3 xl:p-6 ${url.pathname === '/Custome' ? 'text-blue-600' : ''}`}>
                        <Link to="/Custome">
                            <span className='text-[22px] font-semibold'>MÜŞTƏRİLƏR</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNavbar
