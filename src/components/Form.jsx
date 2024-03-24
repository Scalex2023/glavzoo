import React from 'react'
import Wrapper from '../layout/Wrapper'

function Form() {
	return (
		<>
			<Wrapper>
				<div className='flex flex-col justify-center items-center'>
					<div
						className='flex flex-col items-start px-[20px] md:px-0'
						data-aos='zoom-in-up'
					>
						<h1
							className='text-[#312783] text-[40px] mt-[110px] mb-[50px] font-Poppins'
							data-aos='fade-right'
						>
							Get In Touch
						</h1>

						<div>
							<div className='flex justify-center items-center flex-col gap-4'>
								<div className='flex flex-col md:flex-row items-center gap-4 w-full'>
									<input
										type='text'
										name='firstname'
										placeholder='First Name'
										className='input w-full bg-[#70869d12] rounded-[5px] text-blue-500 placeholder-blue-500 font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
									<input
										type='text'
										name='lastname'
										placeholder='Last Name'
										className='input w-full bg-[#70869d12] rounded-[5px] text-blue-500 placeholder-blue-500 font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
								</div>
								<div className='flex items-center gap-4 flex-col md:flex-row w-full'>
									<input
										type='email'
										name='email'
										placeholder='Email'
										className='input w-full bg-[#70869d12] rounded-[5px] text-blue-500 placeholder-blue-500 font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
									<input
										type='number'
										name='password'
										placeholder='Phone'
										className='input w-full bg-[#70869d12] rounded-[5px] text-blue-500 placeholder-blue-500 font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
								</div>
								<input
									type='text'
									name='Address'
									placeholder='Address'
									className='input w-full bg-[#70869d12] rounded-[5px] text-blue-500 placeholder-blue-500 font-Poppins px-[30px] py-[15px] text-[17px]'
								/>
								<textarea
									name='message'
									cols='30'
									rows='10'
									placeholder='Type your message here'
									className='w-full bg-[#70869d12] rounded-[5px] text-blue-500 textarea placeholder-blue-500 font-Poppins px-[30px] py-[15px] text-[17px]'
								></textarea>
								<button className='bg-[#312783] text-white px-[55px] py-[15px] rounded-[500px] transition duration-75 ease-in hover:scale-90 mt-[10px] font-Poppins'>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	)
}

export default Form
