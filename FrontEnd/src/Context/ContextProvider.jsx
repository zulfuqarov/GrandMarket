import React, { createContext, useState } from 'react'
import axios from 'axios'


const env = import.meta.env

export const ContextGrand = createContext()

const ContextProvider = ({ children }) => {

    const [categoryState, setcategoryState] = useState([])
    const [categoryState2, setcategoryState2] = useState([])

    const FilteringCategory = async (id) => {
        try {
            const res = await axios.get(`${env.REACT_APP_BACKEND_HOST}/Discount/Filter/${id}`)
            // console.log(res.data)
            setcategoryState(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const FilteringCategory2 = async () => {
        try {
            const res = await axios.get(`${env.REACT_APP_BACKEND_HOST}/Discount/`)
            // console.log(res.data)
            setcategoryState2(res.data)
        } catch (error) {
            console.log(error)
        }
    }





    return (
        <ContextGrand.Provider
            value={{
                FilteringCategory,
                FilteringCategory2,
                categoryState, 
                categoryState2
            }}
        >
            {children}
        </ContextGrand.Provider>
    )
}

export default ContextProvider