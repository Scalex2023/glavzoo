import React from 'react'
import Slider from 'react-slick'

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
						src={"https://freshcat.ru/images/articles/5_5.jpg"}
						className='w-full h-96 lg:max-h-[80vh] lg:h-auto object-cover'
						alt='slider1'
					/>
				</div>
				<div>
					<img
						src={"https://zoodelo.com/upload/medialibrary/e69/e690c86ecc452ada96142baebf30a94a.jpg"}
						className='w-full h-96 lg:max-h-[80vh] lg:h-auto object-cover'
						alt='slider2'
					/>
				</div>
				<div>
					<img
						src={"https://animal.kg/image/cache/catalog/products/1/3-700x700.jpg"}
						className='w-full h-96 lg:max-h-[80vh] lg:h-auto object-cover'
						alt='slider3'
					/>
				</div>
                <div>
					<img
						src={"https://upload.wikimedia.org/wikipedia/commons/7/71/SilicaGel.jpg"}
						className='w-full h-96 lg:max-h-[80vh] lg:h-auto object-cover'
						alt='slider3'
					/>
				</div>
			</Slider>
			<div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
				<div className='flex flex-col justify-center items-center bg-[#12121254] p-10 rounded-2xl'>
                    <h1
                        className='text-3xl font-bold md:mb-4 text-center flex flex-col items-center'
                        data-aos='fade-right'
                    >
                        <span className='text-[28px] max-w-[700px] leading-none md:text-[55px] drop-shadow-lg md:mb-[20px]'>
                            Надежный поставщик наполнителей для котов
                        </span>
                        <span className='font-normal drop-shadow-lg text-[18px] md:text-[32px]'>
                            Производство и оптовые поставки по всей России и СНГ
                        </span>
                    </h1>
                    <a href='#products'
                        className='bg-[#4C67EA] flex justify-center items-center rounded-[500px] md:w-[250px] md:h-[55px] px-[20px] py-[8px] text-white font-bold md:text-[18px] text-[16px] mt-[10px] transition duration-75 hover:scale-90'
                        data-aos='fade-left'
                    >
                        СДЕЛАТЬ ЗАКАЗ
                    </a>
                </div>
			</div>
		</div>
	)
}

export default Swipper
