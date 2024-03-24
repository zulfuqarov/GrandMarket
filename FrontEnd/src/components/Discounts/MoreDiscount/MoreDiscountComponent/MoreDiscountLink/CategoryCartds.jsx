import React, { useContext, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContextGrand } from '../../../../../Context/ContextProvider'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
// import 'swiper/css/pagination';
import CategoryCardsMobile from './CategoryCardsMobile';


// import required modules
import { Grid, Autoplay } from 'swiper/modules';



const CategoryCartds = () => {
    const context = useContext(ContextGrand)

    return (
        <section className='container mx-auto '>
            <div className=' h-full pt-[60px] max-[768px]:hidden'>
                {
                    context.categoryStateError ? <h1 className='text-red-600 font-bold text-[22px] text-center'>Mehsul tapilmadi</h1> :
                        <Swiper
                            slidesPerView={3}
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
                                        <div key={index}>
                                            <img className='rounded-xl w-[200px] h-[200px]' src={oneMap.Img} alt="" />
                                            <div>
                                                <p className='float-left'>{oneMap.Name}</p> <br />
                                                <span className='text-green-500 font-bold text-[15px] inline-block pr-[10px] pt-[15px] float-left'>{oneMap.Price}  ₼</span>
                                                <span className='text-gray-500 text-[15px] float-left pt-[15px] line-through  '>{oneMap.OldPrice} ₼</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            {
                                context.allCategoryState &&
                                context.allCategoryState.map((oneMap, index) => (
                                    <SwiperSlide >
                                        <div key={index}>
                                            <img className='rounded-xl w-[200px] h-[200px]' src={oneMap.Img} alt="" />
                                            <div>
                                                <p className='float-left'>{oneMap.Name}</p> <br />
                                                <span className='text-green-500 font-bold text-[15px] inline-block pr-[10px] pt-[15px] float-left'>{oneMap.Price}  ₼</span>
                                                <span className='text-gray-500 text-[15px] float-left pt-[15px] line-through  '>{oneMap.OldPrice} ₼</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                }

            </div>

            <div className='max-[768px]:block'>
                <CategoryCardsMobile />
            </div>
        </section>
    )
}

export default CategoryCartds