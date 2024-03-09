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

// import img start
// import ImageGrid from '../../../../About/img/30065447_1000x1000.jpeg'
// import ImageGrid2 from '../../../../Home/img/ae716c_31b07e2cdf6643829a63faca8035b127~mv2.webp'
// import ImageGrid3 from '../../../../Home/img/ae716c_40420e58dd024380a28ecf5c21251e40~mv2.webp'
// import ImageGrid4 from '../../../../Home/img/ae716c_4f5c3d3f58f8439a8fae1e9c2a939197~mv2.webp'
// import ImageGrid5 from '../../../../Home/img/ae716c_6bc4bbab1f3d47c397317d95dcd0ca78~mv2.webp'
// import ImageGrid6 from '../../../../Home/img/ae716c_905b1677f3e4445fb725a51d6b29ca65~mv2.webp'
// import ImageGrid7 from '../../../../Home/img/ae716c_a13ebdcfc8314b8caddf5055bd7cf5da~mv2.webp'
// import ImageGrid8 from '../../../../Home/img/ae716c_b1b0d0290f6540488584b3b776fb7809~mv2.webp'
// import ImageGrid9 from '../../../../Home/img/ae716c_e0ec635e9b9d4c629c2aec352e9f28e6~mv2.webp'

const CategoryCartds = () => {
    const context = useContext(ContextGrand)

    return (
        <section className='container mx-auto '>
            <div className=' h-full pt-[60px]'>
                {
                    context.categoryStateError ? <h1 className='text-red-600 font-bold text-[22px] text-center'>Mehsul tapilmadi</h1> :
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
                                            <img className='rounded-xl w-[280px] h-[280px]' src={oneMap.Img} alt="" />
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
                                            <img className='rounded-xl w-[280px] h-[280px]' src={oneMap.Img} alt="" />
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
        </section>
    )
}

export default CategoryCartds