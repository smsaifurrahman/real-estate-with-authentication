import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from 'react';
const Slider = () => {

    return (
        <div   className='grid grid-cols-1 gap-2  lg:grid-cols-2 my-4 md:my-10 '>
             <div  data-aos="zoom-in" data-aos-delay="500"  data-aos-easing="ease-in-out" className='col-span-1 '>
                    <h1 className='md:mt-16 md:text-4xl font-bold text-orange-600 text-2xl text-center'>The better way to buy <br />Real Estate</h1>
                    <p className='text-center my-4 text-sm md:text-xl'>
                        
                        Transforming dreams into luxurious realities. <br />
                        Experience the epitome of luxury living.
                        Elevating lifestyles, one exquisite property at a time.
                    </p>
                  <div className='flex items-center justify-center mt-6'>
                     <button className='btn bg-blue-500 text-white font-bold '>Explore Properties</button>
                  </div>
             </div>
             <div className='col-span-1 h-52 md:h-96 lg:h-96'>
             <Swiper className='h-full'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: false }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 4000 }}
            // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img className='h-full w-full rounded-xl object-cover' src='https://i.ibb.co/JrzqhYx/1000-F-754826732-ETiyz-JOwh-EFe-Xx-M8j-H2s-Zs5a-S5-MLzr2k.jpg' alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover rounded-xl ' src="https://i.ibb.co/Hp3vRdP/house-landscape-pool-relaxation-garden-1203-4900.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover rounded-xl ' src="https://i.ibb.co/s9rjsLL/mansion.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover rounded-xl ' src="https://i.ibb.co/1MDXG8j/modern-compound-condominium-building-87720-119072.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover rounded-xl ' src="https://i.ibb.co/51KNVww/pentthhouse.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full w-full object-cover rounded-xl ' src="https://i.ibb.co/0YB5rSn/private-island-landscaping-paradise-designed-nature-perfected-1003615-9767.jpg" alt="" /></SwiperSlide>

        
            ...
             </Swiper>
             </div>
        </div>
    );
};

export default Slider;