import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Trending.css';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

function Trending() {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={30}
			slidesPerGroup={3}
			breakpoints={{
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 5,
					spaceBetween: 50,
				},
			}}
			loop={true}
			loopFillGroupWithBlank={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			className='mySwiper'
			autoplay={{
				delay: 1500,
				disableOnInteraction: false,
			}}
			
			centeredSlides={true}>
			<SwiperSlide>
				<div className='swiperItem'>
					<img
						src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
						alt=''
					/>
                    <div className="sliderproductinfo">
                        asasa
                    </div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='swiperItem'>
					<img
						src='https://rukminim1.flixcart.com/image/416/416/k5y7tzk0/microwave-new/g/a/e/magicook-30l-wine-magnolia-whirlpool-original-imafzhm4gtyhkhhw.jpeg?q=70'
						alt=''
					/>
                    <div className="sliderproductinfo">
                        asasa
                    </div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='swiperItem'>
					<img
						src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
						alt=''
					/>
                    <div className="sliderproductinfo">
                        asasa
                    </div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='swiperItem'>
					<img
						src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
						alt=''
					/>
                    <div className="sliderproductinfo">
                        asasa
                    </div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='swiperItem'>
					<img
						src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
						alt=''
					/>
                    <div className="sliderproductinfo">
                        asasa
                    </div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='swiperItem'>
					<img
						src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
						alt=''
					/>
                    <div className="sliderproductinfo">
                        asasa
                    </div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='swiperItem'>
					<img
						src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
						alt=''
					/>
                    <div className="sliderproductinfo">
                        asasa
                    </div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='swiperItem'>
					<img
						src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
						alt=''
					/>
                    <div className="sliderproductinfo">
                        asasa
                    </div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='swiperItem'>
					<img
						src='https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg'
						alt=''
					/>
                    <div className="sliderproductinfo">
                        asasa
                    </div>
				</div>
			</SwiperSlide>
		</Swiper>
	);
}

export default Trending;
