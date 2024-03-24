import React from 'react'

function ProductCards() {
	return (
		<>
			{/* Product 1 */}
			<div
				className='card w-[250px] card-compact bg-base-100 shadow-xl max-h-[55vh] cursor-pointer'
				data-aos='zoom-in'
			>
				<figure>
					<img
						src='https://www.vaka.ru/images/stories/vaka-lux/VakaLUXvoln.jpg'
						alt='product'
						className='h-[250px] object-cover'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-[18px] text-black'>
						Зерносмеси для птиц и грызунов
					</h2>
				</div>
			</div>
			{/* Product 2 */}
			<div
				className='card w-[250px] card-compact bg-base-100 shadow-xl max-h-[55vh] cursor-pointer'
				data-aos='zoom-in'
			>
				<figure>
					<img
						src='https://media.istockphoto.com/id/509921302/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%82%D0%B8%D1%86%D0%B0-%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D0%B5-%D1%80%D0%B0%D0%B7%D0%B1%D1%80%D0%BE%D1%81%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%80%D0%BC.jpg?s=612x612&w=0&k=20&c=lm9yFnk4Sz61lBkPH1y3OTiebg63_i6aVKb5r8asfbA='
						alt='product'
						className='h-[250px] object-cover'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-[18px] text-black'>
						Премиум рецепты для птиц и грызунов
					</h2>
				</div>
			</div>
			{/* Product 3 */}
			<div
				className='card w-[250px] card-compact bg-base-100 shadow-xl max-h-[55vh] cursor-pointer'
				data-aos='zoom-in'
			>
				<figure>
					<img
						src='https://ireland.apollo.olxcdn.com/v1/files/5adugokcpbew-UA/image;s=640x460'
						alt='product'
						className='h-[250px] object-cover'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-[18px] text-black'>
						Экструдированные гранулыa
					</h2>
				</div>
			</div>
			{/* Product 4 */}
			<div
				className='card w-[250px] card-compact bg-base-100 shadow-xl max-h-[55vh] cursor-pointer'
				data-aos='zoom-in'
			>
				<figure>
					<img
						src='http://biotex.su/thumb/2/j4fZ0wMQjt7hFVTr6vnB0Q/250r/d/professionalnyy_korm_dlya_krolikov.png'
						alt='product'
						className='h-[250px] object-cover'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-[18px] text-black'>
						Прессованные гранулы
					</h2>
				</div>
			</div>
			{/* Product 5 */}
			<div
				className='card w-[250px] card-compact bg-base-100 shadow-xl max-h-[55vh] cursor-pointer'
				data-aos='zoom-in'
			>
				<figure>
					<img
						src='http://biotex.su/thumb/2/TU2ya7aRI8sclcb6e-SgeA/250r/d/korm_dlya_sobak_krasivyy.jpg'
						alt='product'
						className='h-[250px] object-cover'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-[18px] text-black'>
						Корм для собак и кошек
					</h2>
				</div>
			</div>
			{/* Product 6 */}
			<div
				className='card w-[250px] card-compact bg-base-100 shadow-xl max-h-[55vh] cursor-pointer'
				data-aos='zoom-in'
			>
				<figure>
					<img
						src='http://biotex.su/thumb/2/iuNE5Lr3tbl4JLg_Cet7Bw/250r/d/korm_granuly.jpg'
						alt='product'
						className='h-[250px] object-cover'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-[18px] text-black'>
						Травяные гранулы
					</h2>
				</div>
			</div>
			{/* Product 7 */}
			<div
				className='card w-[250px] card-compact bg-base-100 shadow-xl max-h-[55vh] cursor-pointer'
				data-aos='zoom-in'
			>
				<figure>
					<img
						src='http://biotex.su/thumb/2/O7GUE3FT9KgB5x4YVhUn3Q/250r/d/palochki_skleinnyye.jpg'
						alt='product'
						className='h-[250px] object-cover'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-[18px] text-black'>
						Лакомства для птиц и грызунов
					</h2>
				</div>
			</div>
			{/* Product 8 */}
			<div
				className='card w-[250px] card-compact bg-base-100 shadow-xl max-h-[55vh] cursor-pointer'
				data-aos='zoom-in'
			>
				<figure>
					<img
						src='http://biotex.su/thumb/2/GpM6uPLNWk5fCgPu1DINaA/r180/d/dried-vegetables.jpg'
						alt='product'
						className='h-[250px] object-cover'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-[18px] text-black'>
						Различные добавки для корма по вашему выбору
					</h2>
				</div>
			</div>
		</>
	)
}

export default ProductCards
