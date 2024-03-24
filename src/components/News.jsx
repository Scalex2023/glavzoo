import React from 'react'
import NewsCards from './cards/NewsCards'

function News() {
	return (
		<>
			<div className='flex justify-center items-center flex-col mb-[70px]'>
				<div className='flex items-center justify-center flex-col my-[70px]'>
					<h1 className='text-[#8FCC54] font-bold md:text-[50px] text-[28px]'>
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
