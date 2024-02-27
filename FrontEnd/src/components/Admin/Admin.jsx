import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Admin = () => {
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const getCheckToken = async () => {
        try {
            const response = await axios.get('http://localhost:4444/api/Admin/')
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
            <div className='w-full h-[100vh] flex justify-center items-center'>
                <h1 className='text-[44px] text-red-600 font-semibold'>loadin...</h1>
            </div>
        )
    } else {
        return (
            <div>Admin</div>
        )
    }


}

export default Admin