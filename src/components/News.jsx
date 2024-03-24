import React from 'react'
import NewsCards from './cards/NewsCards'

function News() {
	return (
		<>
			<div id='news' className='flex justify-center items-center flex-col mb-[0px]'>
				<div className='flex items-center justify-center flex-col my-[70px]'>
					<h1 className='text-[#4C67EA] font-bold md:text-[50px] text-[28px]'>
                        С нами вы можете:
					</h1>
				</div>

				<div>
					<NewsCards />
				</div>
			</div>
		</>
	)
}

export default News
