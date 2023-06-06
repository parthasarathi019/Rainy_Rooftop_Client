//eslint-disable-next-line
import React, { useEffect, useRef, useState } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// Import React Rating styles
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'

const Testimonials = () => {
  const [Reviews, SetReviews] = useState([])

  useEffect(() => {
    fetch(`http://localhost:11000/reviews`)

      .then(res => res.json())
      .then((data) => {
        SetReviews(data);
      })
  }, [])
  console.log(Reviews);
  return (
    <section className="pt-2">
      <section className="text-center mb-3 md:mb-6">
        <p className="pb-2 text-[#D99904] italic text-[.7em] md:text-[1.1em]">---What Our Clients Say---</p>
        <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
        <p className="text-[1em] md:text-[2em] py-[3px] md:py-[5px]">TESTIMONIALS</p>
        <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
      </section>

      <section className="py-1 md:py-7">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {
            Reviews.map(Review => <SwiperSlide key={Review._id}>
              <div>
                <Rating className="m-auto md:pb-7"
                  style={{ maxWidth: 180 }}
                  value={Review.rating}
                  readOnly
                />
                <div className='leading-[9.5px] pt-24'>
                  <p className='md:text-[15em] text-[9em] text-center '>&#8220;</p>
                </div>
                <p className="text-[.55em] md:text-[.8em] md:px-[9em] px-3">{Review.details}</p>
                <p className="text-[#CD9003] md:text-[1.3em]">{Review.name}</p>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </section>
    </section>
  );
};

export default Testimonials;

