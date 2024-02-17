import React from 'react'
import Button from '../../PrompsComponent/Button'

const HomeCv = () => {
    return (
        <div className='container mx-auto'>
            <section className='flex flex-col justify-center items-center pt-[80px]'>
                <div>
                    <h1 className='text-[32px] max-[768px]:text-[28px] font-bold text-gray-800'>GRANDMART AİLƏSİNƏ QOŞUL!</h1>
                </div>
                <div>
                    <p className='text-[22px] py-[20px] font-semibold text-gray-800 text-center w-[480px] max-[768px]:w-[320px] max-[768px]:text-[20px]'>Grandmart marketlər şəbəkəsinin mövcud iş elanları ilə tanış olun, "cv"lərinizi göndərin və ailəmizə qoşulma imkanı əldə edin.   </p>
                </div>
                <div>
                    <a href='https://jobs.glorri.com/companies/grandmart' target='_blank' rel='noopener noreferrer'>
                        <Button ButtonName='İş Elanları' />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default HomeCv