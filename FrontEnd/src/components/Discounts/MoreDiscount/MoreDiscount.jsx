import React from 'react'
import MoreDiscountHeader from './MoreDiscountComponent/MoreDiscountHeader'
import MoreDiscountCategoryMenu from './MoreDiscountComponent/MoreDiscountCategoryMenu'

const MoreDiscount = () => {
    return (
        <section >
            <div>
                <MoreDiscountHeader />
            </div>
            <div>
                <MoreDiscountCategoryMenu />
            </div>
        </section>
    )
}

export default MoreDiscount