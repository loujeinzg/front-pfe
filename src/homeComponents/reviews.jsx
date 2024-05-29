import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import custom1 from "./img/reviews/custom1.png"; // Import your custom image
import custom2 from "./img/reviews/custom2.png"; // Import your custom image
import custom3 from "./img/reviews/custom3.png"; // Import your custom image
import custom4 from "./img/reviews/custom4.png"; // Import your custom image
import custom5 from "./img/reviews/custom5.png"; // Import your custom image
import custom6 from "./img/reviews/custom6.png"; // Import your custom image
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Reviews = () => {
  useEffect(() => {
    // Any initialization code for Swiper can be placed here if needed
  }, []);

  return (
    <section className="review" id="review">
      <h1 className="heading">Customer's <span>Review</span></h1>
      <Swiper
      modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        className="review-slider"
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="box">
            <img src={custom1} alt="" />
            <div className="icons">
              <a href="#"><i className="fas fa-user"></i> by User</a>
              <a href="#"><i className="fas fa-calendar"></i> 1st May, 2023</a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              rerum autem quaerat id dolor delectus nemo, reprehenderit officiis
              facere quam?
            </p>
            <h3>Marie</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </SwiperSlide>
             <SwiperSlide>
             <div class="swiper-slide box">
            <img src={custom2} alt="" />
            <div class="icons">
              <a href="#"><i class="fas fa-user"></i> by user</a>
              <a href="#"><i class="fas fa-calendar"></i> 1st may, 2023</a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              rerum autem quaerat id dolor delectus nemo, reprehenderit officiis
              facere quam?
            </p>
            <h3>Nour</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper-slide box">
            <img src={custom3} alt="" />
            <div class="icons">
              <a href="#"><i class="fas fa-user"></i> by user</a>
              <a href="#"><i class="fas fa-calendar"></i> 1st may, 2023</a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              rerum autem quaerat id dolor delectus nemo, reprehenderit officiis
              facere quam?
            </p>
            <h3>Sarah</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
        </SwiperSlide>
       <SwiperSlide>
       <div class="swiper-slide box">
            <img src={custom4} alt="" />
            <div class="icons">
              <a href="#"><i class="fas fa-user"></i> by user</a>
              <a href="#"><i class="fas fa-calendar"></i> 1st may, 2023</a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              rerum autem quaerat id dolor delectus nemo, reprehenderit officiis
              facere quam?
            </p>
            <h3>Emily</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
       </SwiperSlide>
       <SwiperSlide>
       <div class="swiper-slide box">
            <img src={custom5} alt="" />
            <div class="icons">
              <a href="#"><i class="fas fa-user"></i> by user</a>
              <a href="#"><i class="fas fa-calendar"></i> 1st may, 2023</a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              rerum autem quaerat id dolor delectus nemo, reprehenderit officiis
              facere quam?
            </p>
            <h3>Hannah</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
       </SwiperSlide>
       <SwiperSlide>
       <div class="swiper-slide box">
            <img src={custom6} alt="" />
            <div class="icons">
              <a href="#"><i class="fas fa-user"></i> by user</a>
              <a href="#"><i class="fas fa-calendar"></i> 1st may, 2023</a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              rerum autem quaerat id dolor delectus nemo, reprehenderit officiis
              facere quam?
            </p>
            <h3>Lisa</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
       </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Reviews;
