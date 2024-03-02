import React from 'react'
import { Link } from 'react-router-dom'
const AdminHeaderLinks = () => {
    return (
        <div className='w-[18%]'>
            <Link className='text-[20px] w-full text-black font-semibold py-[15px] px-[15px]  hover:bg-blue-500 hover:text-white transition-all  inline-block border-[1px] border-black' to='Admin-Product'>Mehsul elave et</Link> <br />
            <Link className='text-[20px] w-full text-black font-semibold py-[15px] px-[15px]  hover:bg-blue-500 hover:text-white transition-all inline-block border-[1px] border-black' to='Admin-Department'>Deparment elave et</Link>
        </div>
    )
}

export default AdminHeaderLinks