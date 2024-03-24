import React from 'react'
import Wrapper from '../layout/Wrapper'
import ProductCards from './cards/ProductCards'

function Products() {
	return (
		<div id='products' className='bg-[#4C67EA] pb-[50px]'>
			<Wrapper>
				<div className='flex justify-center items-center flex-col'>
					<h1 className='text-white text-[24px] md:text-[40px] text-center pt-[60px] pb-[40px] font-semibold'>
                        Мы предлагаем все существующие разновидности наполнителей
					</h1>
					<div className='flex justify-center items-center flex-wrap gap-[40px]'>
						<ProductCards />
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default Products
