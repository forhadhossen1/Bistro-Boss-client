
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';


const Category = () => {
    return (
        <div className='mb-10'>
            <SectionTitle
            subHeading={'From 11.00am to 10.00pm'}
            heading={'Order Online'}>  
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h2 className='text-2xl text-center -mt-10 shadow-lg text-white uppercase'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h2 className='text-2xl text-center -mt-10 shadow-lg text-white uppercase'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h2 className='text-2xl text-center -mt-10 shadow-lg text-white uppercase'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h2 className='text-2xl text-center -mt-10 shadow-lg text-white uppercase'>Dessetrs</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h2 className='text-2xl text-center -mt-10 shadow-lg text-white uppercase'>Salad</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;