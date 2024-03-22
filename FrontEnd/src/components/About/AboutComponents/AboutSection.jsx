import React from 'react'



// import img start
import Paper from '../img/SectionPaper.png'

const AboutSection = () => {
    return (
        <div className='container mx-auto'>
            <section className='pt-[80px]'>
                <div className='grid grid-cols-3 max-[991px]:grid-cols-1'>
                    <div className="flex items-center justify-center text-[36px] text-blue-500 font-semibold max-[991px]:pt-[50px] max-[768px]:text-[24px]"><p><i className="fa-solid fa-person-arrow-up-from-line pr-[20px] text-[32px] text-blue-300 max-[768px]:text-[24px]"></i>Populyarıq</p></div>
                    <div className="flex items-center justify-center text-[36px] text-blue-500 font-semibold max-[991px]:pt-[50px] max-[768px]:text-[24px]"><p><i className="fa-solid fa-hand-holding pr-[20px] text-[32px] text-blue-300 max-[768px]:text-[24px]"></i>Əlçatanıq</p></div>
                    <div className="flex items-center justify-center text-[36px] text-blue-500 font-semibold max-[991px]:pt-[50px] max-[768px]:text-[24px]"><p><i className="fa-solid fa-person-circle-check  pr-[20px] text-[32px] text-blue-300 max-[768px]:text-[24px]"></i>Etibarlıyıq</p></div>
                </div>
                <div className='grid grid-cols-2 pt-[50px] max-[991px]:grid-cols-1'>
                    <div className="flex items-center justify-center  text-[36px] text-blue-500 font-semibold max-[768px]:text-[24px]"><p><i className="fa-solid fa-star pr-[20px] text-[32px] text-blue-300 max-[768px]:text-[24px]"></i>Liderik</p></div>
                    <div className="flex items-center justify-center text-[36px] text-blue-500 font-semibold max-[991px]:pt-[50px] max-[768px]:text-[24px]"><p><i className="fa-solid fa-thumbs-up pr-[20px] text-[32px] text-blue-300 max-[768px]:text-[24px]"></i>Rahatıq</p></div>
                </div>
                <div className="pt-[50px] flex items-center justify-center text-[36px] text-blue-500 font-semibold max-[768px]:text-[24px]"><p><i className="fa-solid fa-flag pr-[20px] text-[32px] text-blue-300 max-[768px]:text-[24px]"></i>Yerli/Azərbaycanlıyıq</p></div>
            </section>
        </div>
    )
}

export default AboutSection