import React, { useEffect, useContext, useState } from 'react'
import { Outlet, Link, useLocation, useParams } from 'react-router-dom'
import CategoryCartds from './MoreDiscountLink/CategoryCartds'
import { ContextGrand } from '../../../../Context/ContextProvider'

const MoreDiscountCategoryMenu = () => {

    const CategoryFilterLinks = [
        {
            to: "Drink/İçki",
            name: "Sular"
        },
        {
            to: "Milk/Süd,Səhər yeməyi",
            name: "Süd,Səhər yeməyi"
        },
        {
            to: "Clearning/Deterjan,Təmizlik",
            name: "Deterjan,Təmizlik"
        },
        {
            to: "Book/Dəftərxana Ləvazımatları",
            name: "Dəftərxana Ləvazımatları"
        },
        {
            to: "Electronic/Elektronika",
            name: "Elektronika"
        },
        {
            to: "Firing/Atişdırmalıq",
            name: "Atişdırmalıq"
        },
        {
            to: "Cake/Tort,Bişmələr,Çörək",
            name: "Tort,Bişmələr,Çörək"
        },
        {
            to: "Food/Təmal Qida",
            name: "Təmal Qida"
        },
        {
            to: "Fruit/Meyvə,Tərəvəz",
            name: "Meyvə,Tərəvəz"
        },
        {
            to: "Meat/Ət,Toyuq,Balıq",
            name: "Ət,Toyuq,Balıq"
        },
    ]

    const context = useContext(ContextGrand)
    const { pathname } = useLocation()
    const { id } = useParams()


    const handleChangeInputs = (e) => {
        FilteringCategoryLinks()
        context.setChangeInputs(e.target.value)
    }

    const FilteringCategoryLinks = () => {
        const Filter = CategoryFilterLinks.filter((oneFilter) => {
            return oneFilter.name.toLowerCase().trim().includes(context.ChangeInputs.toLowerCase().trim())
        })
        return Filter
    }

    useEffect(() => {
        context.FilteringCategory(id, pathname)
    }, [id])



    return (
        <div>
            <main className='container mx-auto '>
                <div className="bg-white flex max-[1024px]:flex-col ">
                    <div className="h-[100%] w-[20%] max-[1024px]:w-full">
                        <div className="bg-white w-full py-3 px-4 rounded-lg flex justify-around items-center ">
                            <input value={context.ChangeInputs} onChange={handleChangeInputs} type="text" placeholder="seach" className=" bg-white rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
                            <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg></span>
                        </div>
                        <div className="bg-white w-full  rounded-md">
                            <Link to="/More-Discount"><h1 className="text-center text-xl my-4  bg-blue-500 py-2 rounded-md border-b-2 cursor-pointer  text-white">Bütün Kateqoriyalar</h1></Link>
                            <div className="bg-white rounded-md list-none  text-center ">
                                {
                                    FilteringCategoryLinks().length > 0 ? (
                                        FilteringCategoryLinks().map((oneMap) => (
                                            <li className="py-3 border-b-2"><Link to={`${oneMap.to}`} className="list-none  hover:text-indigo-600">{oneMap.name}</Link></li>
                                        ))
                                    ) : <h1 className='text-red-500'>Tapilmadi</h1>
                                }

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