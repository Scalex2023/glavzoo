import React from 'react'

function AboutFromTexts() {
	return (
		<div className='mx-auto py-10 mt-[100px]'>
			<div className='flex flex-col md:flex-row px-5 justify-center items-center gap-20'>
				<div className='flex flex-col items-start gap-5'>
					<div>
						<h2 className='text-xl font-bold text-gray-800 mb-2'>Адрес:</h2>
						<ul className='list-disc pl-5'>
							<li className='text-base font-medium text-gray-700'>
								г. Ростов-на-Дону, пер. Элеваторный 4А
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-bold text-gray-800 mb-2'>Телефон:</h2>
						<ul>
							<li className='text-base font-medium text-gray-700'>
								<a href='tel:+79001202080'>+7 (900) 120 20 80</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-bold text-gray-800 mb-2'>Email:</h2>
						<ul className='list-disc pl-5'>
							<li className='text-base font-medium text-gray-700'>
								<a href="mailto:info@glavzoo.ru">info@glavzoo.ru</a>
							</li>
						</ul>
					</div>
					<div>
						<div className='hidden md:block w-64 h-64 bg-gray-200 rounded-lg'>
							<img
								src='https://image.made-in-china.com/202f0j00dOAhZwBCKHbG/Wholesale-Price-White-Color-Desiccant-Silica-Gel-Manufacturers-in-China.webp'
								alt='img'
								className='object-cover w-full h-full rounded-lg'
							/>
						</div>
					</div>
				</div>
				<div>
					<h2 className='text-xl font-bold text-gray-800 mb-2'>
						Местоположение:
					</h2>
					<div className='w-60 h-60 md:w-96 md:h-96 bg-gray-200 rounded-lg'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.2414201891374!2d39.6258714!3d47.2509823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3c7643faef0a9%3A0x69d11e0b938ca7f7!2z0K3Qu9C10LLQsNGC0L7RgNC90YvQuSDQv9C10YAuLCA00JAsINCg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDM0NDAwMA!5e0!3m2!1sru!2s!4v1712145165652!5m2!1sru!2s'
							width='100%'
							height='100%'
							style={{ border: '0' }}
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
							className='rounded-lg'
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutFromTexts
