import React, { useEffect, useContext } from 'react'
import { Outlet, Link, useLocation, useParams } from 'react-router-dom'
import CategoryCartds from './MoreDiscountLink/CategoryCartds'
import { ContextGrand } from '../../../../Context/ContextProvider'

const MoreDiscountCategoryMenu = () => {

    const context = useContext(ContextGrand)
    const { pathname } = useLocation()
    const { id } = useParams()

    useEffect(() => {
        context.FilteringCategory(id,pathname)
    }, [id])

    

    return (
        <div>
            <main className='container mx-auto '>
                <div className="bg-white flex max-[1024px]:flex-col ">
                    <div className="h-[100%] w-[20%] max-[1024px]:w-full">
                        <div className="bg-white w-full py-3 px-4 rounded-lg flex justify-around items-center ">
                            <input type="text" placeholder="seach" className=" bg-white rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
                            <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg></span>
                        </div>
                        <div className="bg-white w-full  rounded-md">

                            <h1 className="text-center text-xl my-4  bg-blue-500 py-2 rounded-md border-b-2 cursor-pointer  text-white">Bütün Kateqoriyalar</h1>
                            <div className="bg-white rounded-md list-none  text-center ">
                                <li className="py-3 border-b-2"><Link to="Drink/İçki" className="list-none  hover:text-indigo-600">İçki</Link></li>
                                <li className="py-3 border-b-2"><Link to="Milk/Süd,Səhər yeməyi" className="list-none  hover:text-indigo-600">Süd,Səhər yeməyi</Link></li>
                                <li className="py-3 border-b-2"><Link to="Clearning/Deterjan,Təmizlik" className="list-none  hover:text-indigo-600">Deterjan,Təmizlik</Link></li>
                                <li className="py-3 border-b-2"><Link to="Book/Dəftərxana Ləvazımatları" className="list-none  hover:text-indigo-600">Dəftərxana Ləvazımant</Link></li>
                                <li className="py-3 border-b-2"><Link to="Electronic/Elektronika" className="list-none  hover:text-indigo-600">Elektronika</Link></li>
                                <li className="py-3 border-b-2"><Link to="Firing/Atişdırmalıq" className="list-none  hover:text-indigo-600">Atişdırmalıq</Link></li>
                                <li className="py-3 border-b-2"><Link to="Cake/Tort,Bişmələr,Çörək" className="list-none  hover:text-indigo-600">Tort,Bişmələr,Çörək</Link></li>
                                <li className="py-3 border-b-2"><Link to="Food/Təmal Qida" className="list-none  hover:text-indigo-600">Təmal Qida</Link></li>
                                <li className="py-3 border-b-2"><Link to="Fruit/Meyvə,Tərəvəz" className="list-none  hover:text-indigo-600">Meyvə,Tərəvəz</Link></li>
                                <li className="py-3 border-b-2"><Link to="Meat/Ət,Toyuq,Balıq" className="list-none  hover:text-indigo-600">Ət,Toyuq,Balıq</Link></li>
                            </div>
                        </div>
                    </div>
                    <div className="h-full   w-[80%] max-[1024px]:w-full max-[1024px]:pt-[60px] bg-white  rounded-md flex items-center">
                        {pathname === '/More-Discount' ? <CategoryCartds /> : <Outlet />}
                    </div>

                </div>
            </main>
        </div>
    )
}

export default MoreDiscountCategoryMenu