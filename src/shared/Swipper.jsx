import React from 'react'
import Slider from 'react-slick'
import slider1 from '../assets/swiper1.jpg'
import slider2 from '../assets/swiper2.jpg'
import slider3 from '../assets/swiper3.jpg'

function Swipper() {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: false,
		autoplay: true,
		autoplaySpeed: 2000,
	}

	return (
		<div className='slider-container relative'>
			<Slider {...settings}>
				<div>
					<img
						src={slider1}
						className='w-full h-96 lg:max-h-[80vh] lg:h-auto object-cover'
						alt='slider1'
					/>
				</div>
				<div>
					<img
						src={slider2}
						className='w-full h-96 lg:max-h-[80vh] lg:h-auto object-cover'
						alt='slider2'
					/>
				</div>
				<div>
					<img
						src={slider3}
						className='w-full h-96 lg:max-h-[80vh] lg:h-auto object-cover'
						alt='slider3'
					/>
				</div>
			</Slider>
			<div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
				<h1
					className='text-3xl font-bold md:mb-4 text-center flex flex-col items-center'
					data-aos='fade-right'
				>
					<span className='text-[20px] md:text-[55px] drop-shadow-lg md:mb-[20px]'>
						ПРОИЗВОДСТВО ЗООКОРМОВ
					</span>
					<span className='font-normal drop-shadow-lg text-[15px] md:text-[40px]'>
						ПО НАШЕЙ ИЛИ ВАШЕЙ РЕЦЕПТУРЕ
					</span>
				</h1>
				<button
					className='bg-[#F65152] rounded-[500px] md:w-[270px] md:h-[62px] px-[20px] py-[8px] text-white font-bold md:text-[24px] text-[10px] mt-[10px] transition duration-75 hover:scale-90'
					data-aos='fade-left'
				>
					СДЕЛАТЬ ЗАКАЗ
				</button>
			</div>
		</div>
	)
}

export default Swipper
