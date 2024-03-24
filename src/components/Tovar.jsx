import React from 'react'
import Wrapper from '../layout/Wrapper'
import tovar from '../assets/tovar.jpg'

function Tovar() {
	return (
		<Wrapper>
			<div className='flex justify-center items-start flex-col mt-[150px]'>
				<h1
					className='text-3xl lg:text-5xl font-semibold text-center mb-8'
					data-aos='fade-right'
				>
					ЗООКОРМА ПОД ВАШЕЙ ТОРГОВОЙ МАРКОЙ
				</h1>
				<div
					className='flex flex-col lg:flex-row items-center gap-8'
					data-aos='fade-right'
				>
					<div className='w-full lg:w-1/2 px-3 md:px-0'>
						<p className='text-lg lg:text-xl leading-relaxed mb-4'>
							Добрый день уважаемые коллеги!
						</p>
						<p className='mb-4'>
							На протяжении многих лет наша компания выпускает сотни уникальных
							продуктов для птиц и грызунов для различных клиентов под
							собственными торговыми марками.
						</p>
						<p className='mb-4'>
							<span className='font-bold'>
								Нам доверили производство под собственными торговыми марками
								крупнейшие компании Российского зообизнеса потому что мы:
							</span>
						</p>
						<ul className='list-disc ml-8 mb-4'>
							<li>используем превосходные ингредиенты премиум-класса,</li>
							<li>упаковку высочайшего качества с привлекательной графикой,</li>
							<li>
								увеличенные производственные мощности, использование самых
								современных технологий,
							</li>
							<li>уникальные гранулы собственного производства,</li>
							<li>наличие проверенных временем базовых рецептов,</li>
							<li>
								исключительный контроль качества и опыт обслуживания клиентов,
								который не имеет себе равных,
							</li>
							<li>
								производим только высококачественный и натуральный продукт.
							</li>
						</ul>
						<p className='mb-4'>
							Мы выбираем только самые лучшие ингредиенты для производства
							здоровых и питательных продуктов для домашних животных и птиц из
							местных семян и зерновых культур, фруктов, орехов, специй, трав и
							полезных овощей.
						</p>
						<p className='font-bold text-lg lg:text-xl mb-4'>
							Наше качество всегда выше цены!
						</p>
					</div>
					<div className='w-full lg:w-1/2' data-aos='fade-left'>
						<img src={tovar} alt='404' className='rounded-lg shadow-lg' />
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default Tovar
