import React from 'react'
import Swipper from '../shared/Swipper'
import settings from '../assets/settings.jpg'
import like from '../assets/like.jpg'
import current from '../assets/current.jpg'
import Wrapper from '../layout/Wrapper'

function Hero() {
	return (
		<div>
			<Swipper />
			<Wrapper>
				<div
					className='flex flex-col md:flex-row justify-center md:justify-between items-center my-[20px] md:my-[80px] gap-3 md:gap-0'
					data-aos='fade-up'
				>
					<div className='w-full md:w-[25%] flex items-center gap-3'>
						<img src={settings} alt='settings image' className='w-[60px]' />
						<p className='font-semibold text-black'>
							Собственные производственные линии
						</p>
					</div>
					<div className='w-full md:w-[25%] flex items-center gap-3'>
						<img src={like} alt='like image' className='w-[60px]' />
						<p className='font-semibold text-black'>
							Тщательный отбор лучшего сырья
						</p>
					</div>
					<div className='w-full md:w-[25%] flex items-center gap-3'>
						<img src={current} alt='current image' className='w-[60px]' />
						<p className='font-semibold text-black'>
							Контроль качества на всех стадиях производства
						</p>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default Hero
