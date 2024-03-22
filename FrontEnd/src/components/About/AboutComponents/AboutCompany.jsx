import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const AboutCompany = () => {
    return (
        <section className='pt-[80px]'>
             <h1 className='text-[38px] text-center font-semibold max-[768px]:text-[28px]'>
                PARTNYORLARIMIZ
            </h1>


            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}

                className="mySwiper pt-[80px]"
            >
                <SwiperSlide><img src="https://static.wixstatic.com/media/ae716c_c89eb2f58dc444a8826523ada0250837~mv2.png/v1/fill/w_134,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/ae716c_968747f8987249ce88d55b02c3be9533~mv2.png/v1/crop/x_0,y_110,w_500,h_299/fill/w_134,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/ae716c_6891db3dddd24943903f1fd154a80a5c~mv2.png/v1/fill/w_134,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/ae716c_863096042f9142a9ad4babd7790c6e82~mv2.png/v1/fill/w_134,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/ae716c_eed992b24c5c439fb1a50e6aaef081db~mv2.png/v1/fill/w_134,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/ae716c_84cd8ec7461e46b98a2da5ab0d5daafd~mv2.png/v1/fill/w_134,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/ae716c_0f8627a8c75f44fcb4a3e3f5f41a7e1d~mv2.png/v1/fill/w_134,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/ae716c_2b4d96a9ea664254b8290c07a954f3f8~mv2.png/v1/fill/w_134,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/ae716c_469c36a253934544ae0a2152223da97d~mv2.png/v1/fill/w_134,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/ae716c_41546349cd5345a69b87a1b0a17dd4db~mv2.png/v1/fill/w_134,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2.png" alt="" /></SwiperSlide>
            </Swiper>



            {/* <Swiper
                slidesPerView={3}
                spaceBetween={50}
                centeredSlides={true}
                className="mySwiper pt-[80px]"
            >
                
            </Swiper> */}
        </section>
    )
}

export default AboutCompany