import React, { useEffect, useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import AdminHeader from './AdminComponent/AdminHeader'
import AdminHeaderLinks from './AdminComponent/AdminHeaderLinks'
const env = import.meta.env

const Admin = () => {

    const navigate = useNavigate()
    const [loading, setloading] = useState(false)

    const getCheckToken = async () => {
        try {
            const response = await axios.get(`${env.REACT_APP_BACKEND_HOST}/Admin/`)
            console.log(response.data)
            setloading(true)
        } catch (error) {
            console.log(error)
            navigate('/')
        }
    }

    useEffect(() => {
        getCheckToken()
    }, [])




    if (!loading) {
        return (
            <div className='flex   flex-row justify-center items-center w-full h-[100vh]'>
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
            </div>
        )
    } else {
        return (
            <section>
                <AdminHeader />
                <div className='mx-auto container'>
                    <div className=' flex  pt-[80px]'>
                        <AdminHeaderLinks />
                        <Outlet />
                    </div>
                </div>
            </section>
        )
    }


}

export default Admin