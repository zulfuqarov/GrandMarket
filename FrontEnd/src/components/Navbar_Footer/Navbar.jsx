import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

    const url = useLocation()
    return (
        <header className="bg-white shadow-lg h-24 hidden md:flex">
            <Link to="" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
                <img className="" src="https://static.wixstatic.com/media/ae716c_3c71723485e14966bc32032bfd7b8db6~mv2.png/v1/crop/x_135,y_0,w_858,h_440/fill/w_127,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/grand_logo-2.png" alt="" />
            </Link>
            <nav className="header-links contents  font-semibold text-base lg:text-lg">
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
            <div className="border flex items-center px-4 lg:px-6 xl:px-8">
                <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 h-[50px] w-[100px]  rounded">Əlaqə</button>
            </div>
        </header>
    )
}

export default Navbar