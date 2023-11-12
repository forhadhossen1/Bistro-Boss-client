import SectionTitle from "../../Components/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            >
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               {
                reviews.map(review => <SwiperSlide
                key={review._id}
                >
                   <div className="m-10 md:m-24">
                    <p className="text-center">{review.details}</p>
                    <h3 className="text-2xl text-orange-500 text-center">{review.name}</h3>
                   </div>
                </SwiperSlide>)
               }
            </Swiper>

        </section>
    );
};

export default Testimonials;