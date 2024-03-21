import React from 'react'
import DiscountsCarts from './DiscountsComponents/DiscountsCarts'
import DiscountsHeader from './DiscountsComponents/DiscountsHeader'

const Discounts = () => {
    return (
        <div className='pt-[80px]'>
            <DiscountsHeader />
            <DiscountsCarts />
        </div>
    )
}

export default Discounts