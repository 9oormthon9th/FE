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

const CourseIntro = ({ centerPos }) => {
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
                <p>
                    해안가의 정취를 느낄 수 있는 소금막과 삶과 문화가 숨쉬는
                    서귀포 시내를 걸으며 서귀포의 문화와 생태를 접할 수 있는
                    코스예요.
                </p>
                <p>
                    서귀포 칼호텔 바당길과 허니문하우스 전망대 길에서 푸른
                    바다의 파노라마를 즐겨보세요.
                </p>
            </div>
        </>
    );
};

export default CourseIntro;
