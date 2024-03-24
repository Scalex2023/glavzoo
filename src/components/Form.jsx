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
							className='text-[#8FCC54] text-[40px] mt-[110px] mb-[20px] font-Poppins'
							data-aos='fade-right'
						>
							Оставьте заявку
						</h1>

						<div>
							<div className='flex justify-center items-center flex-col gap-4'>
								<div className='flex flex-col md:flex-row items-center gap-4 w-full'>
									<input
										type='text'
										name='firstname'
										placeholder='Имя'
										className='input w-full bg-[#70869d12] rounded-[5px] text-[#8FCC54] font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
									<input
										type='text'
										name='lastname'
										placeholder='Фамилия'
										className='input w-full bg-[#70869d12] rounded-[5px] text-[#8FCC54] font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
								</div>
								<div className='flex items-center gap-4 flex-col md:flex-row w-full'>
									<input
										type='email'
										name='email'
										placeholder='Email'
										className='input w-full bg-[#70869d12] rounded-[5px] text-[#8FCC54] font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
									<input
										type='number'
										name='password'
										placeholder='Номер телефона'
										className='input w-full bg-[#70869d12] rounded-[5px] text-[#8FCC54] font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
								</div>
								<input
									type='text'
									name='Address'
									placeholder='Адрес'
									className='input w-full bg-[#70869d12] rounded-[5px] text-[#8FCC54] font-Poppins px-[30px] py-[15px] text-[17px]'
								/>
								<textarea
									name='message'
									cols='30'
									rows='10'
									placeholder='Информация'
									className='w-full bg-[#70869d12] textarea rounded-[5px] text-[#8FCC54] font-Poppins px-[30px] py-[15px] text-[17px]'
								></textarea>
								<button className='bg-[#8FCC54] text-white px-[55px] py-[15px] rounded-[500px] transition duration-75 ease-in hover:scale-90 mt-[10px] font-Poppins'>
									Отправить
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
