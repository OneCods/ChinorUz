// Import Components
import { Container } from '../Container/Container'
import { HeroWrapper } from './Style'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Style.css";

export default function Hero() {



	const style = {
		test: {
			display: 'flex'
		}
	}

	return (
		<Container>
			<HeroWrapper>
				<Swiper
					dir="rtl"
					navigation={false}
					spaceBetween={50}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Pagination]}
					className="mySwiper"
					// breakpoints={{
					// 	// when window width is >= 640px
					// 	640: {
					// 	  width: 640,
					// 	  slidesPerView: 1,
					// 	},
					// 	// when window width is >= 768px
					// 	768: {
					// 	  width: 768,
					// 	  slidesPerView: 2,
					// 	},
					//   }}
				>
					<SwiperSlide>
						<div className="slider-card">
							<img src={'https://images.unsplash.com/photo-1699111260099-9769fb81ce65?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="banner" height={413} />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider-card">
							<img src={'https://images.unsplash.com/photo-1699111260099-9769fb81ce65?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="banner" height={413} />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider-card">
							<img src={'https://images.unsplash.com/photo-1699111260099-9769fb81ce65?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="banner" height={413} />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider-card">
							<img src={'https://images.unsplash.com/photo-1699111260099-9769fb81ce65?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="banner" height={413} />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider-card">
							<img src={'https://images.unsplash.com/photo-1699111260099-9769fb81ce65?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="banner" height={413} />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider-card">
							<img src={'https://images.unsplash.com/photo-1699111260099-9769fb81ce65?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="banner" height={413} />
						</div>
					</SwiperSlide>
				</Swiper>
			</HeroWrapper>
		</Container>
	)
}
