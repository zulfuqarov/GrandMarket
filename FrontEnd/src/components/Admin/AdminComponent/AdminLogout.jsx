import axios from 'axios'
import React from 'react'
import { TERipple } from "tw-elements-react";

const env = import.meta.env

const AdminLogout = () => {

    const Logout = async () => {
        try {
            const res = await axios.post(`${env.REACT_APP_BACKEND_HOST}/Admin/Logout`)
            window.location.reload();
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='mx-auto container'>
            <div className='flex justify-end mr-[60px] pt-[30px]'>
                <TERipple rippleColor="light">
                    <button
                        onClick={Logout}
                        type="button"
                        className="inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                        Admin Panel Cıcış
                    </button>
                </TERipple>
            </div>

        </div>
    )
}

export default AdminLogout