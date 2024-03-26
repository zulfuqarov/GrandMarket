import ButtonPromps from '../../../components/PrompsComponent/Button'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const env = import.meta.env

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination, Autoplay } from 'swiper/modules';





const HomeCartProduct = () => {

    const [DiscountImg, setDiscountImg] = useState([])

    const GetDiscountData = async () => {
        try {
            const res = await axios.get(`${env.REACT_APP_BACKEND_HOST}/DiscountImg/`)
            setDiscountImg(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetDiscountData()
    }, []);

    return (
        <section className='container mx-auto'>
            <div className='pt-[80px] flex flex-row max-[648px]:flex-col items-center justify-around'>
                <div>
                    <h1 className='text-[32px] text-blue-400 font-bold max-[540px]:text-[20px]'>ENDIRIMLƏR</h1>
                </div>
                <div className='max-[648px]:pt-[20px]'>
                    <Link to='/More-Discount'>
                        <ButtonPromps ButtonName='ƏTRAFLI ' />
                    </Link>
                </div>
            </div>
            <div className='pt-[60px]'>
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
                            slidesPerView: 2,
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

                    {
                        DiscountImg &&
                        DiscountImg.map((oneMap, index) => (
                            <SwiperSlide key={index}>
                                <img className='rounded-xl' src={oneMap.DiscountImg} alt="" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default HomeCartProduct