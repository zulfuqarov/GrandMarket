import React from 'react'
import CustomeHeader from './CustomeComponents/CustomeHeader'
import CustomeAccardion from './CustomeComponents/CustomeAccardion'
import CustomeAnket from './CustomeComponents/CustomeAnket'

const Custome = () => {
    return (
        <div className='pt-[80px]'>
            <CustomeHeader />
            <CustomeAccardion />
            <CustomeAnket/>
        </div>
    )
}

export default Custome