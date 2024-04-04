
import React from 'react'

function AboutFromTexts() {
	return (
		<div className='mx-auto max-w-[1280px] py-10 h-full w-full mt-[200px] md:mt-[100px]'>
			<div className='flex flex-col w-full md:flex-row px-7 justify-center h-[620px] gap-10'>
				<div className='flex h-full w-full md:w-[45%] flex-col items-start gap-5'>
					<div>
						<h2 className='text-xl font-bold text-gray-800 mb-2'>Адрес склада:</h2>
						<ul className='list-disc pl-5'>
							<li className='text-base list-none -ml-4 font-medium text-gray-700'>
								<a href="#">г. Ростов-на-Дону, пер. Элеваторный 4А</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-bold text-gray-800 mb-2'>Телефон:</h2>
						<ul>
							<li className='text-base list-none font-medium text-gray-700'>
								<a href='tel:+79001202080'>+7 (900) 120 20 80</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-bold text-gray-800 mb-2'>Email:</h2>
						<ul className='list-disc pl-5'>
							<li className='text-base list-none -ml-4 font-medium text-gray-700'>
								<a href="mailto:info@glavzoo.ru">info@glavzoo.ru</a>
							</li>
						</ul>
					</div>
					<div className='w-full'>
						<div className='md:w-[520px] md:h-[500px] w-full h-full bg-gray-200 rounded-lg'>
							<img
								src='https://image.made-in-china.com/202f0j00dOAhZwBCKHbG/Wholesale-Price-White-Color-Desiccant-Silica-Gel-Manufacturers-in-China.webp'
								alt='img'
								className='object-cover w-full h-full rounded-lg'
							/>
						</div>
					</div>
				</div>
				<div className='md:w-[55%] h-[685px]'>
					<h2 className='text-xl font-bold text-gray-800'>
						Склад на карте:
					</h2>
					<div className='w-full mt-6 h-full md:w-full rounded-lg z-[-1]'>
						<div className='h-full' style={{ position: 'relative', overflow: 'hidden' }}>
                            <a href="https://yandex.ru/maps/39/rostov-na-donu/?utm_medium=mapframe&utm_source=maps" className='text-[#eee] text-[12px absolute top-0]'>Ростов‑на‑Дону</a><a href="https://yandex.ru/maps/39/rostov-na-donu/house/elevatorny_pereulok_4a/Z0AYcAVmTk0HQFptfX50cXVhZA==/?l=mrc&ll=39.626743%2C47.250999&utm_medium=mapframe&utm_source=maps&z=17" className='text-[#eee] text-[12px] absolute top-[14px]'>Квартал Нефтекачка — карта, фото, как добраться, координаты</a>

                            <iframe src="https://yandex.ru/map-widget/v1/?l=mrc&ll=39.626743%2C47.250999&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=39.626780%2C47.250920&whatshere%5Bzoom%5D=17&z=17" frameborder="1" className='relative w-full h-full'></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutFromTexts
