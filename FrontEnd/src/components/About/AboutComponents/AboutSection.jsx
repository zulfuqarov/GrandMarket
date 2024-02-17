import React from 'react'



// import img start
import Paper from '../img/SectionPaper.png'

const AboutSection = () => {
    return (
        <div className='container mx-auto'>
            <section className='pt-[80px] flex flex-row    max-[768px]:flex-col '>
                <div className='basis-3/6 flex justify-center items-center'>
                    <img className='w-[350px] h-[350px] rounded-xl' src={Paper} alt="" />
                </div>
                <div className='basis-3/6  max-[768px]:basis-1'>
                    <p className='w-full mt-[20px] max-[1024px]:text-[16px] max-[768px]:text-center text-[18px] font-semibold '>Azərbaycan pərakəndə bazarında 20 ilə yaxındır fəaliyyət göstərən Grandmart supermarketlər şəbəkəsi hazırda 30-dan yuxarı filialla müştərilərin ixtiyarındadır.</p>
                    <p className='w-full mt-[20px] max-[1024px]:text-[16px] max-[768px]:text-center text-[18px] font-semibold '>Paytaxt Bakı şəhərində ilk filialı ilə fəaliyyətə başlayan Grandmart supermarketlər şəbəkəsi bununla yanaşı ölkənin digər regionlarında da filial açılışlarını gerçəkləşdirmişdir.</p>
                    <p className='w-full mt-[20px] max-[1024px]:text-[16px] max-[768px]:text-center text-[18px] font-semibold '>Qeyd edək ki, supermarketlər şəbəkəsi 40 mindən çox məhsul çeşidinin satışını həyata keçirir. Grandmart Supermarketlər Şəbəkəsində hazırda 1500-ə yaxın əməkdaş çalışmaqdadır.</p>
                    <p className='w-full mt-[20px] max-[1024px]:text-[16px] max-[768px]:text-center text-[18px] font-semibold '>Paytaxt Bakı şəhərində 5000 kv. m. ərazidə yerləşən mərkəzi anbar soyutma-isitmə sistemləri və yük maşınları ilə təmin olunmuşdur.</p>
                </div>
            </section>
        </div>
    )
}

export default AboutSection