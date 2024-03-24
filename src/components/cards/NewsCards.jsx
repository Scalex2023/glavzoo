import React from 'react'

function NewsCards() {
	return (
		<div className='flex flex-col md:flex-row justify-center items-center gap-10'>
			{/* Card 1 */}
			<div
				className='flex justify-center items-center flex-col w-[280px] md:w-[350px] h-[560px] text-center shadow-xl rounded-[5px]'
				data-aos='zoom-in'
			>
				<img
					src='https://catlittercompany.com/wp-content/uploads/2023/04/bentonite-775x517.png'
					alt='404'
					className='rounded-[5px]'
				/>
				<p className='text-[#322785] font-semibold mt-[20px]'>MART 23, 2023</p>
				<h1 className='text-[#3B4956] font-bold text-[25px] transition duration-75 ease-in-out hover:text-[#312783] cursor-pointer'>
					Cat Littler Company BV Global Pet Expo
				</h1>
				<p className='text-[#70869d] max-w-[100%] mt-[10px] px-[30px] font-semibold'>
					from March 22 to 24 March, Cat Littler Company will be present at the
					Global Pet Expo in Orlando
				</p>
				<button className='bg-[#322785]  text-white px-[50px] py-[14px] rounded-[500px] font-semibold my-[25px]'>
					Read More
				</button>
			</div>
			{/* Card 2 */}
			<div
				className='flex justify-center items-center flex-col w-[280px] md:w-[350px] h-[560px] text-center shadow-xl rounded-[5px]'
				data-aos='zoom-in'
			>
				<img
					src='https://catlittercompany.com/wp-content/uploads/2023/04/tofu-2-775x517.png'
					alt='404'
					className='rounded-[5px]'
				/>
				<p className='text-[#322785] font-semibold mt-[20px]'>AUGUST 7, 2022</p>
				<h1 className='text-[#3B4956] font-bold text-[25px] transition duration-75 ease-in-out hover:text-[#312783] cursor-pointer'>
					Cat Litter Company BV SuperZoo
				</h1>
				<p className='text-[#70869d] max-w-[100%] mt-[10px] px-[30px] font-semibold'>
					From August 22 to August 24, Cat Litter Company will be present at the
					SuperZoo in Las Vegas.
				</p>
				<button className='bg-[#322785]  text-white px-[50px] py-[14px] rounded-[500px] font-semibold my-[25px]'>
					Read More
				</button>
			</div>
			{/* Card 3 */}
			<div
				className='flex justify-center items-center flex-col w-[280px] md:w-[350px] h-[560px] text-center shadow-xl rounded-[5px]'
				data-aos='zoom-in'
			>
				<img
					src='https://catlittercompany.com/wp-content/uploads/2023/04/HI-litter-1-775x517.png'
					alt='404'
					className='rounded-[5px]'
				/>
				<p className='text-[#322785] font-semibold mt-[20px]'>MART 24, 2022</p>
				<h1 className='text-[#3B4956] font-bold text-[25px] transition duration-75 ease-in-out hover:text-[#312783] cursor-pointer'>
					Cat Litter Company BV Interzoo
				</h1>
				<p className='text-[#70869d] max-w-[100%] mt-[10px] px-[30px] font-semibold'>
					From August 22 to August 24, Cat Litter Company will be present at the
					SuperZoo in Las Vegas.
				</p>
				<button className='bg-[#322785]  text-white px-[50px] py-[14px] rounded-[500px] font-semibold my-[25px]'>
					Read More
				</button>
			</div>
		</div>
	)
}

export default NewsCards
