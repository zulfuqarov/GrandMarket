import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
    const url = useLocation()

    const [open, setopen] = useState(false)

    const OpenMobileNavbar = () => {
        setopen(!open)
    }

    useEffect(() => {
        setopen(false)
    }, [url])


    return (
        <div>
            <header className="bg-white w-full shadow-lg h-24 flex max-[991px]:justify-between max-[991px]:items-center fixed  z-10">

                <Link to="" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
                    <img className="" src="https://static.wixstatic.com/media/ae716c_3c71723485e14966bc32032bfd7b8db6~mv2.png/v1/crop/x_135,y_0,w_858,h_440/fill/w_127,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/grand_logo-2.png" alt="" />
                </Link>
                <nav className="header-links contents  font-semibold text-base lg:text-lg  max-[991px]:hidden">
                    <ul className="flex items-center w-full justify-center  ml-4 xl:ml-8 mr-auto">
                        <li className={`p-3 xl:p-6 ${url.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/">
                                <span>Ana-Səhifə</span>
                            </Link>
                        </li>
                        <li className={`p-3 xl:p-6 ${url.pathname === '/About' ? 'active' : ''}`}>
                            <Link to="/About">
                                <span>HAQQIMIZDA</span>
                            </Link>
                        </li>
                        <li className={`p-3 xl:p-6 ${url.pathname === '/Branches' ? 'active' : ''}`}>
                            <Link to="/Branches">
                                <span>FİLİALLAR</span>
                            </Link>
                        </li>
                        <li className={`p-3 xl:p-6 ${url.pathname === '/Discounts' ? 'active' : ''}`}>
                            <Link to="/Discounts">
                                <span>ENDİRİMLƏR</span>
                            </Link>
                        </li>
                        <li className={`p-3 xl:p-6 ${url.pathname === '/Custome' ? 'active' : ''}`}>
                            <Link to="/Custome">
                                <span>MÜŞTƏRİLƏR</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="border flex items-center px-4 lg:px-6 xl:px-8  max-[991px]:hidden">
                    <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 h-[50px] w-[100px]  rounded">Əlaqə</button>
                </div>
                <div className='hidden max-[991px]:block'>
                    <i onClick={OpenMobileNavbar} className="fa-solid fa-bars pr-[60px] text-[32px] cursor-pointer"></i>
                </div>
            </header>
            {
                open ? <MobileNavbar OpenMobileNavbar={OpenMobileNavbar} /> : null
            }
        </div>
    )
}

export default Navbar