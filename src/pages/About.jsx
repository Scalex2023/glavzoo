import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Wrapper from '../layout/Wrapper'
import Footer from '../components/Footer'
import Form from '../components/Form'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, getFirestore } from 'firebase/firestore'
import { app } from '../firebase/firebase'

function About() {
	const [headings] = useCollection(collection(getFirestore(app), 'headings'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	})

	const fiveHeadings = headings?.docs[4]
	const sixHeadings = headings?.docs[5]
	const sevenHeadings = headings?.docs[6]
	const eightHeadings = headings?.docs[7]
	const nineHeadings = headings?.docs[8]
	const tenHeadings = headings?.docs[9]
	const elevenHeadings = headings?.docs[10]
	const twelveHeadings = headings?.docs[11]
	const thirteenHeadings = headings?.docs[12]

	return (
		<>
			<Header />
			<div className='overlay-container min-h-[40vh] flex flex-col justify-center items-center font-Poppins'>
				<div className='background-image'>
					<div className='flex justify-center items-center flex-col h-full'>
						<h1 className='text-center text-[#4c67ea] text-[30px] md:text-[50px] font-bold font-Poppins'>
							О нас
						</h1>
						<div className='flex justify-center items-center gap-7 md:gap-5 mt-[5px]'>
							<span className='text-white font-semibold text-[10px] md:text-[14px] cursor-pointer hover:text-[#4c67ea] transition duration-100 ease-in font-Poppins'>
								<Link to='/'>ГЛАВНАЯ</Link>
							</span>
							<span className='text-white font-semibold text-[10px] md:text-[14px] font-Poppins'>
								/
							</span>
							<span className='text-white font-semibold text-[10px] md:text-[14px] font-Poppins'>
								О НАС
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* Section 1 */}
			<Wrapper>
				<div className='flex justify-center items-center flex-col mt-[60px] md:mt-[120px] font-Poppins'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'
						className='w-[30px] my-[20px]'
						data-aos='fade-down'
					>
						<path
							fill='#4c67ea'
							d='M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z'
						/>
					</svg>
					{fiveHeadings && (
						<>
							<h1
								className='text-[50px] font-bold text-[#4c67ea] max-w-[100%] text-center font-Poppins leading-[1.1]'
								data-aos='fade-right'
							>
								{fiveHeadings.data().title}
							</h1>
							<p
								className='font-medium uppercase text-[#667e96] text-[16px] md:text-[17px] font-Poppins'
								data-aos='fade-right'
							>
								{fiveHeadings.data().desc}
							</p>
						</>
					)}

					<div className='flex justify-center items-center gap-10 mt-[60px] flex-col md:flex-row mx-[15px] md:mx-0'>
						<img
							src='https://www.catlittercompany.com/wp-content/uploads/2023/04/over-ons-1.png'
							alt='404'
							className='w-[350px]'
							data-aos='fade-right'
						/>
						<div
							className='flex flex-col items-center gap-6 w-full text-[#667e96] text-[17px]'
							data-aos='fade-left'
						>
							{sixHeadings && (
								<p className='font-Poppins'>{sixHeadings?.data().desc}</p>
							)}
							{sevenHeadings && (
								<p className='font-Poppins'>{sevenHeadings?.data().desc}</p>
							)}
							{eightHeadings && (
								<p className='font-Poppins'>{eightHeadings?.data().desc}</p>
							)}
							{nineHeadings && (
								<p className='font-Poppins'>{nineHeadings?.data().desc}</p>
							)}
						</div>
					</div>
				</div>
				{/* Section 2 */}
				<div className='flex justify-center items-start flex-col mt-[60px] md:mt-[120px] font-Poppins mx-[10px]'>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
							className='w-[30px] my-[20px]'
							data-aos='fade-right'
						>
							<path
								fill='#4c67ea'
								d='M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z'
							/>
						</svg>
						{tenHeadings && (
							<>
								<h1
									className='text-[50px] font-bold text-[#4c67ea] max-w-[100%] text-start md:text-center font-Poppins leading-[1.1]'
									data-aos='fade-right'
								>
									{tenHeadings?.data().title}
								</h1>
								<p
									className='font-medium uppercase text-[#667e96] text-[16px] md:text-[17px] font-Poppins'
									data-aos='fade-right'
								>
									{tenHeadings?.data().desc}
								</p>
							</>
						)}
					</div>
					<div className='flex justify-center items-center flex-col md:flex-row gap-10'>
						<div className='mt-[10px]' data-aos='fade-right'>
							<ol className='flex flex-col items-start justify-start'>
								{elevenHeadings && (
									<>
										<li className='list-decimal text-[#667e96] font-bold font-Poppins text-[17px] mt-[20px] ml-4'>
											{elevenHeadings?.data().title}
										</li>
										<p className='text-[#667e96] text-[17px] font-Poppins'>
											{elevenHeadings?.data().desc}
										</p>
									</>
								)}

								{twelveHeadings && (
									<>
										<li className='list-decimal text-[#667e96] font-bold font-Poppins text-[17px] mt-[20px] ml-4'>
											{twelveHeadings?.data().title}
										</li>
										<p className='text-[#667e96] text-[17px] font-Poppins'>
											{twelveHeadings?.data().desc}
										</p>
									</>
								)}

								{thirteenHeadings && (
									<>
										<li className='list-decimal text-[#667e96] font-bold font-Poppins text-[17px] mt-[20px] ml-4'>
											{thirteenHeadings?.data().title}
										</li>
										<p className='text-[#667e96] text-[17px] font-Poppins'>
											{thirteenHeadings?.data().desc}
										</p>
									</>
								)}
							</ol>
						</div>
						<img
							src='https://www.catlittercompany.com/wp-content/uploads/2023/04/over-ons-2-2.png'
							alt='cat'
							className='w-[350px]'
							data-aos='fade-left'
						/>
					</div>
					<a href='#contacts' className='bg-[#4c67ea] text-white px-[45px] py-[17px] rounded-[500px] mt-[40px] font-semibold hover:scale-95 transition duration-100 ease-in-out'>
						Подробнее
					</a>
				</div>
			</Wrapper>

			<Form />
			<Footer />
		</>
	)
}

export default About
