// Import Components
import { Container } from '../Container/Container'
import Image from 'next/legacy/image'
import { HeroCard, HeroCardWrap, HeroSilderCard, HeroWrapper } from './Style'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import Img
import HeroImgTwo from '../../assets/img/hero-img-two.jpg'

export default function Hero() {

    const style = {
        test: {
            display: "flex",
        }
    }

	return (
		<Container>
			<HeroWrapper>
				{/* <HeroSilderCard> */}
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
                        width={900}
                        height={360}
						loop={true}
						pagination={{
							clickable: true
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className='mySwiper'
					>
                        <SwiperSlide>
                        <Image
							src={HeroImgTwo}
							width='100'
							height='100'
							placeholder='blur'
							alt='hero picture'
						/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Image
							src={HeroImgTwo}
							width='100'
							height='100'
							placeholder='blur'
							alt='hero picture'
						/>
                        </SwiperSlide>
					</Swiper>
				{/* </HeroSilderCard> */}
				<HeroCardWrap>
					<HeroCard>
						<Image
							src={HeroImgTwo}
							width='400'
							height='180'
							layout='responsive'
							placeholder='blur'
							alt='hero picture'
						/>
					</HeroCard>
					<HeroCard>
						<Image
							src={HeroImgTwo}
							width='400'
							height='180'
							layout='responsive'
							placeholder='blur'
							alt='hero picture'
						/>
					</HeroCard>
				</HeroCardWrap>
			</HeroWrapper>
		</Container>
	)
}
