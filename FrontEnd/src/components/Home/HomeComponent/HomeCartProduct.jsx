import ButtonPromps from '../../../components/PrompsComponent/Button'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination, Autoplay } from 'swiper/modules';

// import img start
import ImageGrid from '../img/ae716c_2f0517005e4e4b74829b38c762f4ba08~mv2.webp'
import ImageGrid2 from '../img/ae716c_31b07e2cdf6643829a63faca8035b127~mv2.webp'
import ImageGrid3 from '../img/ae716c_40420e58dd024380a28ecf5c21251e40~mv2.webp'
import ImageGrid4 from '../img/ae716c_4f5c3d3f58f8439a8fae1e9c2a939197~mv2.webp'
import ImageGrid5 from '../img/ae716c_6bc4bbab1f3d47c397317d95dcd0ca78~mv2.webp'
import ImageGrid6 from '../img/ae716c_905b1677f3e4445fb725a51d6b29ca65~mv2.webp'
import ImageGrid7 from '../img/ae716c_a13ebdcfc8314b8caddf5055bd7cf5da~mv2.webp'
import ImageGrid8 from '../img/ae716c_b1b0d0290f6540488584b3b776fb7809~mv2.webp'
import ImageGrid9 from '../img/ae716c_e0ec635e9b9d4c629c2aec352e9f28e6~mv2.webp'




const HomeCartProduct = () => {
    return (
        <section className='container mx-auto'>
            <div className='pt-[80px] flex flex-row max-[648px]:flex-col items-center justify-around'>
                <div>
                    <h1 className='text-[32px] text-blue-400 font-bold max-[540px]:text-[20px]'>ENDIRIMLƏR</h1>
                </div>
                <div className='max-[648px]:pt-[20px]'>
                    <ButtonPromps ButtonName='ƏTRAFLI ' />
                </div>
            </div>
            <div className='pt-[60px]'>
                <Swiper
                    slidesPerView={1}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            rows: 2,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            rows: 2,
                        },
                        1024: {
                            rows: 2,
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid6} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid7} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid8} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid9} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid6} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-xl' src={ImageGrid7} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default HomeCartProduct