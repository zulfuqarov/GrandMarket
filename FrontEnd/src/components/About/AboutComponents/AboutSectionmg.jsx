import React from 'react'

const AboutSectionmg = () => {
    return (
        <section className='pt-[80px]'>

            <div className='container mx-auto rounded-xl h-[200px] max-[1024px]:h-[150px] max-[768px]:h-full max-[768px]:py-[25px]  bg-blue-500 shadow-xl shadow-blue-500/50'>
                <div className='flex justify-between items-center max-[768px]:flex-col '>
                    <img className='mt-[-70px] h-[270px] max-[1024px]:h-[150px] max-[1024px]:mt-[0]' src="https://bravosupermarket.az/site/assets/files/1030/d121814a-a7af-11ed-9a2e-8eca303aaa4a_1.png" alt="" />
                    <p className='text-white font-semibold  text-[36px] max-[1280px]:text-[32px] max-[768px]:py-[20px] max-[1024px]:text-[26px] text-center'>Biz sizə yalnız ən yaxşı məhsulları təqdim etmək üçün buradayıq</p>
                    <img className='mt-[-90px] h-[290px] max-[1024px]:h-[150px] max-[1024px]:mt-[0]  mr-[20px] max-[1280px]:text-[32px] max-[768px]:mr-[0]' src="https://bravosupermarket.az/site/assets/files/1030/123213123.png" alt="" />
                </div>
            </div>

        </section>
    )
}

export default AboutSectionmg