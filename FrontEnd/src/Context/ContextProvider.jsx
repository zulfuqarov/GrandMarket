import React, { createContext, useState } from 'react'
import axios from 'axios'


const env = import.meta.env

export const ContextGrand = createContext()

const ContextProvider = ({ children }) => {

    const [categoryState, setcategoryState] = useState([])
    const [allCategoryState, setallCategoryState] = useState([])
    const [categoryStateError, setcategoryStateError] = useState(null)
    const [ChangeInputs, setChangeInputs] = useState('')

    const FilteringCategory = async (id, pathName) => {
        try {
            if (pathName === "/More-Discount") {
                const res = await axios.get(`${env.REACT_APP_BACKEND_HOST}/Discount/`)
                setcategoryStateError(false)
                setallCategoryState(res.data)
                setcategoryState([])
            } else {
                const res = await axios.get(`${env.REACT_APP_BACKEND_HOST}/Discount/Filter/${id}`)
                setcategoryStateError(false)
                setcategoryState(res.data)
                setallCategoryState([])
            }
        } catch (error) {
            console.log(error)
            setcategoryStateError(true)
            setcategoryState([])
        }
    }


    return (
        <ContextGrand.Provider
            value={{
                FilteringCategory,
                allCategoryState,
                categoryState,
                categoryStateError,
                setChangeInputs,
                ChangeInputs
            }}
        >
            {children}
        </ContextGrand.Provider>
    )
}

export default ContextProvider