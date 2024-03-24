import React, { useContext, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContextGrand } from '../../../../../Context/ContextProvider'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
// import 'swiper/css/pagination';


// import required modules
import { Grid, Autoplay } from 'swiper/modules';


const CategoryCardsMobile = () => {
    const context = useContext(ContextGrand)


    return (

        <div className=' h-full pt-[60px]'>
            {
                context.categoryStateError ? <h1 className='text-red-600 font-bold text-[22px] text-center'>Mehsul tapilmadi</h1> :
                    <Swiper
                        slidesPerView={2}
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
                                spaceBetween: 20,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            context.categoryState &&
                            context.categoryState.map((oneMap, index) => (

                                <SwiperSlide >
                                    <div key={index} className='p-[10px]'>
                                        <img className='rounded-xl w-[150px] h-[150px]' src={oneMap.Img} alt="" />
                                        <div className='pt-[10px]'>
                                            <p className='text-center '>{oneMap.Name}</p> <br />
                                            <span className='text-green-500 font-bold text-[15px] text-center inline-block pr-[10px] pt-[15px] '>{oneMap.Price}  ₼</span>
                                            <span className='text-gray-500 text-[15px]  pt-[15px] line-through  text-center'>{oneMap.OldPrice} ₼</span>
                                        </div>
                                    </div>
                                    
                                </SwiperSlide>
                            ))
                        }
                        {
                            context.allCategoryState &&
                            context.allCategoryState.map((oneMap, index) => (
                                <SwiperSlide >
                                   <div key={index} className='p-[10px]'>
                                        <img className='rounded-xl w-[150px] h-[150px]' src={oneMap.Img} alt="" />
                                        <div className='pt-[10px]'>
                                            <p className='text-center '>{oneMap.Name}</p> <br />
                                            <span className='text-green-500 font-bold text-[15px] text-center inline-block pr-[10px] pt-[15px] '>{oneMap.Price}  ₼</span>
                                            <span className='text-gray-500 text-[15px]  pt-[15px] line-through  text-center'>{oneMap.OldPrice} ₼</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
            }

        </div>

    )
}

export default CategoryCardsMobile
