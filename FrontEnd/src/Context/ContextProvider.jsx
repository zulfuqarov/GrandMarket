import React, { createContext, useState } from 'react'
import axios from 'axios'


const env = import.meta.env

export const ContextGrand = createContext()

const ContextProvider = ({ children }) => {

    const [categoryState, setcategoryState] = useState([])
    const [allCategoryState, setallCategoryState] = useState([])

    const FilteringCategory = async (id) => {
        try {
            const res = await axios.get(`${env.REACT_APP_BACKEND_HOST}/Discount/Filter/${id}`)
            // console.log(res.data)
            setcategoryState(res.data)
            setallCategoryState([])
        } catch (error) {
            console.log(error)
            // console.log(error.response.data.DiscountFind)
            setallCategoryState(error.response.data.DiscountFind)
        }
    }

    return (
        <ContextGrand.Provider
            value={{
                FilteringCategory,
                allCategoryState,
                categoryState
            }}
        >
            {children}
        </ContextGrand.Provider>
    )
}

export default ContextProvider