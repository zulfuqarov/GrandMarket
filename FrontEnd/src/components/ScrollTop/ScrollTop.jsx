import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const ScrollTop = () => {

    const { pathname } = useLocation()

    useEffect(() => {
        if (!pathname.startsWith('/More-Discount')) {
            window.scrollTo(0, 0)
        }
    }, [pathname])

    return null
}

export default ScrollTop
