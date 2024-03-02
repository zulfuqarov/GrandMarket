import React from 'react'

const AdminHeader = () => {
    return (
        <header>
            <div className='w-full flex flex-col justify-center items-center pt-[80px]'>
                <h1 className='text-[44px] text-black font-semibold max-[768px]:text-[32px]'>Admin Panel</h1>
                <span className='text-[22px] mt-[30px] text-black font-semibold max-[768px]:text-[19px] text-center leading-[50px]'>Endirimli Məsuların Əlavəsi<br /> Department İşçilərin Əlavə Olunması</span>
            </div>
        </header>
    )
}

export default AdminHeader