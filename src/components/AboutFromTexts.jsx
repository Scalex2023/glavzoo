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
						<div className='w-full md:w-[340px] md:h-[340px] bg-gray-200 rounded-lg'>
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
						Яндекс карты, точка:
					</h2>
					<div className='w-full h-[250px] md:w-[750px] md:h-[750px] rounded-lg z-[-1]'>
						<div style={{ position: 'relative', overflow: 'hidden' }}>
							<a
								href='https://yandex.uz/maps/41/yoshkar-ola/?utm_medium=mapframe&utm_source=maps'
								style={{
									color: '#eee',
									fontSize: '12px',
									position: 'absolute',
									top: '0px',
								}}
							>
								Йошкар‑Ола
							</a>
							<a
								href='https://yandex.uz/maps/41/yoshkar-ola/house/elevatorny_proyezd_4a/YE4Yfg5lQUIGQFtsfXpwdX5mZg==/?ll=47.961789%2C56.614252&mode=search&sll=69.279737%2C41.311151&sspn=0.302811%2C0.126066&text=%D0%AD%D0%BB%D0%B5%D0%B2%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9%204%D0%90&utm_medium=mapframe&utm_source=maps&z=12'
								style={{
									color: '#eee',
									fontSize: '12px',
									position: 'absolute',
									top: '14px',
								}}
							>
								Элеваторный 4А — Яндекс Карты
							</a>
							<iframe
								src='https://yandex.uz/map-widget/v1/?ll=47.961789%2C56.614252&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjk1NDYzMTg3EnHQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCc0LDRgNC40Lkg0K3Quywg0JnQvtGI0LrQsNGALdCe0LvQsCwg0K3Qu9C10LLQsNGC0L7RgNC90YvQuSDQv9GA0L7QtdC30LQsIDTQkCIKDV6VP0IV_nRiQg%2C%2C&sll=69.279737%2C41.311151&sspn=0.302811%2C0.126066&text=%D0%AD%D0%BB%D0%B5%D0%B2%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9%204%D0%90&z=12'
								frameborder='1'
								allowfullscreen='true'
								style={{ position: 'relative' }}
								className='w-full h-[250px] md:min-h-[605px]'
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutFromTexts
