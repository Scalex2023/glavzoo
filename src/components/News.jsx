import React from 'react'
import NewsCards from './cards/NewsCards'

function News() {
	return (
		<>
			<div className='flex justify-center items-center flex-col mb-[70px]'>
				<div className='flex items-center justify-center flex-col my-[70px]'>
					<h1 className='text-[#312783] font-bold md:text-[50px] text-[30px]'>
						Our Latest News
					</h1>
					<p className='text-[#312783] text-[15px] md:text-[20px] font-semibold'>
						CHECK IT OUT
					</p>
				</div>

				<div>
					<NewsCards />
				</div>
			</div>
		</>
	)
}

export default News
