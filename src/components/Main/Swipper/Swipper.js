import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/pagination'
import style from './Swipper.module.css'

import image6 from '../../../images/Group 6.png'
import image7 from '../../../images/Group 7.png';
import image8 from '../../../images/Group 8.png';
import image9 from '../../../images/Group 9.png';
import image10 from '../../../images/Group 10.png';

const Swipper = () => {

    return (
        <div className={style.container}>
            <Swiper
            modules={[Pagination, Autoplay]}
            className={style.swiper_container}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            speed={1000}
            autoplay={{ delay: 3000, disableOnInteraction: false}}
            >
                <SwiperSlide className="swiper_slide"><img src = {image6}></img></SwiperSlide>
                <SwiperSlide className="swiper_slide"><img src = {image7}></img></SwiperSlide>
                <SwiperSlide className="swiper_slide"><img src = {image8}></img></SwiperSlide>
                <SwiperSlide className="swiper_slide"><img src = {image9}></img></SwiperSlide>
                <SwiperSlide className="swiper_slide"><img src = {image10}></img></SwiperSlide>
            </Swiper>
            <div className={style.main_page}>
                <h1>Прокат приставок в Минске вместе c C<span>&</span>G</h1>
            </div>
        </div>
    );
};

export default Swipper;