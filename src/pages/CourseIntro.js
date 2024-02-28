import React, { Image } from 'react';
import MyButton from '../component/MyButton';
import mock_image from '../mocks/images/2.jpg';
import firstCourse from '../mocks/images/1코스.png';
import untitle from '../mocks/images/untitle.png';
import { primaryColor } from '../theme/color';
import TripRecommend from './TripRecommend';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css';

const CourseIntro = ({ startPos, endPos, centerPos, description }) => {
    const imgList = [mock_image, firstCourse, untitle];
    return (
        // TODO: page layout can be extracted
        <>
            <h1
                className={`text-3xl jeju-font text-[${primaryColor}] mb-10 ml-1`}
            >
                6 코스를 추천해요
            </h1>
            <div className='space-y-4'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    loop={true} // loop 기능을 사용할 것인지
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // 한번에 보이는 슬라이드 개수
                            slidesPerGroup: 1, // 몇개씩 슬라이드 할지
                        },
                    }}
                >
                    {imgList.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={item}
                                alt={`Course ${index + 1}`}
                                className='w-full rounded'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <p>{description}</p>
            </div>
        </>
    );
};

export default CourseIntro;
