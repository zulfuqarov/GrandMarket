import axios from 'axios'
import React from 'react'
const env = import.meta.env

const AdminLogout = () => {

    const Logout = async () => {
        try {
            const res = await axios.post(`${env.REACT_APP_BACKEND_HOST}/Admin/Logout`)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <button onClick={Logout}>
                Logout
            </button>
        </div>
    )
}

export default AdminLogout