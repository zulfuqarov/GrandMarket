import React from 'react'

import Paper from '../img/Neutral Brown Simple Torn Paper News Announcement Instagram Post (1).png'

const AboutMission = () => {
    return (
        <div className='container mx-auto'>
            <section className='pt-[80px] flex flex-row    max-[768px]:flex-col '>
                <div className='basis-3/6 flex justify-center items-center'>
                    <img className='w-[350px] h-[350px] rounded-xl' src={Paper} alt="" />
                </div>
                <div className='basis-3/6  max-[768px]:basis-1'>
                    <p className='w-full mt-[20px] max-[1024px]:text-[16px] max-[768px]:text-center text-[18px] font-semibold '>2021-ci il 9 aprel tarixində Qazaxıstanın Aktau şəhərində açılışı gerçəkləşən Grandmart supermarket ölkə sərhədlərindən kənarda fəaliyyət göstərən ilk pərakəndə markası olaraq bilinməkdədir</p>
                    <p className='w-full mt-[20px] max-[1024px]:text-[16px] max-[768px]:text-center text-[18px] font-semibold '>3000 kv. m-lik sahədə yerləşən Aktau filialı həmçinin şəhərin ən böyük supermarketi ünvanını daşımaqdadır.</p>
                </div>

            </section>
        </div>
    )
}

export default AboutMission
