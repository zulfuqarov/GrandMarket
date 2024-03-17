import React from 'react'

import Paper from '../img/Neutral Brown Simple Torn Paper News Announcement Instagram Post (1).png'

const AboutMission = () => {
    return (
        <div className='container mx-auto'>
            <section className='pt-[80px]  grid grid-cols-3 gap-4 max-[1024px]:grid-cols-2  max-[768px]:grid-cols-1 '>
                <div className='bg-black rounded-lg p-[50px] h-[450px] max-[1280px]:h-[500px]  max-[768px]:h-[300px]'>
                    <h1 className='text-[22px] font-semibold text-blue-500 tracking-normal	pb-[35px]'>Komfortlu alış-veriş üçün hər şərait</h1>
                    <li className='text-[17px] text-gray-400 font-normal'>İnnovativ mağaza dizaynı</li>
                    <li className='pt-[10px] text-[17px] text-gray-400 font-normal'>Sıralar arasında genişlik</li>
                    <li className='pt-[10px] text-[17px] text-gray-400 font-normal'>Problemsiz alış-veriş üçün müasir və geniş kassalar</li>
                </div>
                <div className='bg-black rounded-lg p-[50px] h-[450px] max-[1280px]:h-[500px]  max-[768px]:h-[300px]'>
                    <h1 className='text-[22px] font-semibold text-blue-500 tracking-normal	pb-[35px]'>Mağaza standartlarında mükəmməllik</h1>
                    <li className='text-[17px] text-gray-400 font-normal'>Ən yüksək keyfiyyət və təravətə malik məhsulların təsirli görünüşləri</li>
                    <li className='pt-[10px] text-[17px] text-gray-400 font-normal'>Müştərilər üçün rahat sərgilənmiş daim yenilənən zəngin çeşid</li>
                    <li className='pt-[10px] text-[17px] text-gray-400 font-normal'>Qida təhlükəsizliyinə və gigiyenaya zəmanət</li>
                    <li className='pt-[10px] text-[17px] text-gray-400 font-normal'>Aydın promo və qiymət siyasəti</li>
                </div>

                <div className='max-[1024px]:col-span-full mx-auto max-[768px]:col-span-1 max-[768px]:mx-0'>
                    <div className='bg-black rounded-lg p-[50px] h-[450px] max-[1280px]:h-[300px] '>
                        <h1 className='text-[22px] font-semibold text-blue-500 tracking-normal	pb-[35px]'>Qüsursuz xidmət</h1>
                        <li className='text-[17px] text-gray-400 font-normal'>Mükəmməl xidmət üçün təlimli və təcrübəli işçi heyəti</li>
                        <li className='pt-[10px] text-[17px] text-gray-400 font-normal'>Həmişə canla-başla xidmət</li>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default AboutMission
