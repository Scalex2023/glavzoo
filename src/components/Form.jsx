import React from 'react'
import Wrapper from '../layout/Wrapper'

function Form() {
	return (
		<>
			<Wrapper>
				<div id='contacts' className='flex flex-col justify-center items-center'>
					<div
						className='flex flex-col items-start px-[20px] md:px-0'
						data-aos='zoom-in-up'
					>
						<h1
							className='text-[#4C67EA] text-center w-full font-semibold text-[40px] mt-[110px] mb-[20px] font-Poppins'
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
										className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
									<input
										type='text'
										name='lastname'
										placeholder='Фамилия'
										className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
								</div>
								<div className='flex items-center gap-4 flex-col md:flex-row w-full'>
									<input
										type='email'
										name='email'
										placeholder='Email'
										className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
									<input
										type='number'
										name='password'
										placeholder='Номер телефона'
										className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
									/>
								</div>
								<input
									type='text'
									name='Address'
									placeholder='Адрес'
									className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
								/>
								<textarea
									name='message'
									cols='30'
									rows='10'
									placeholder='Информация'
									className='w-full bg-[#70869d12] textarea rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
								></textarea>
								<button className='bg-[#4C67EA] text-white px-[55px] py-[15px] rounded-[500px] transition duration-75 ease-in hover:scale-90 mt-[10px] font-Poppins'>
									Отправить
								</button>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
            <div className='flex justify-center gap-4 items-center my-5'>
                <a href="/">
                    <img className='w-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="telegram" />
                </a>
                <a href="/">
                    <img className='w-12' src="https://static-00.iconduck.com/assets.00/whatsapp-icon-2048x2048-dumosfvo.png" alt="telegram" />
                </a>
            </div>
		</>
	)
}

export default Form
