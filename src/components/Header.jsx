import React, { useState } from 'react'
import logo from '../assets/logo.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import Wrapper from '../layout/Wrapper'
import close from '../assets/x.svg'
import { Link } from 'react-router-dom'

function Header() {
	const [showNavbar, setShowNavbar] = useState(false)

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar)
	}

	return (
		<>
			<Wrapper>
				<nav className='flex justify-between items-center py-[17px]'>
					<div className='flex items-center justify-center gap-[120px]'>
						<a href='/'>
							<img src={logo} alt='logo png' />
						</a>
						<ul className='md:flex items-start gap-[45px] hidden'>
							<li>
								<Link to='/'>Главная</Link>
							</li>
							<li>
								<Link to='/about'>О нас</Link>
							</li>
							<li>
								<a onClick={() => window.location.href = "/#products"} href='/#products'>Виды продукции</a>
							</li>
							<li>
								<a href='#contacts'>Контакты</a>
							</li>
						</ul>
					</div>

					<form className='md:flex items-center gap-[22px] hidden'>
						<div className='flex items-center gap-1'>
							<img src={phone} alt='phone' />
							<a href='tel:+79001202080'>+7 (900) 120 20 80</a>
						</div>
						<div className='flex items-center gap-1'>
							<img src={email} alt='email' />
							<a href='mailto:info@glavzoo.ru'>info@glavzoo.ru</a>
						</div>
					</form>
					<div
						className='flex flex-col gap-[6px] cursor-pointer md:hidden bg-[#4C67EA] p-[10px]'
						onClick={handleShowNavbar}
					>
						<div className='w-[30px] h-[3px] bg-[white] rounded-[10px]'></div>
						<div className='w-[30px] h-[3px] bg-[white] rounded-[10px]'></div>
						<div className='w-[30px] h-[3px] bg-[white] rounded-[10px]'></div>
					</div>
				</nav>
				{/* Mobile Nav */}
				<div
					className={`fixed inset-0 flex z-[999] justify-center items-center bg-black bg-opacity-50 shadow-2xl ${
						showNavbar
							? 'transition translate-x-0 duration-400 ease-in-out'
							: '-translate-x-[100%]'
					}`}
				>
					<div className='absolute top-0 left-0 h-full w-3/5 bg-white  overflow-y-auto'>
						<div className='p-8'>
							<ul className='flex flex-col gap-[25px]'>
								<li>
									<Link to='/'>Главная</Link>
								</li>
								<li>
									<Link to='/about'>О нас</Link>
								</li>
								<li>
									<a href='/#products'>Виды продукции</a>
								</li>
								<li>
									<a href='#contacts'>Контакты</a>
								</li>
							</ul>
							<form className='md:flex mt-8 items-center gap-[22px]'>
								<div className='flex items-center gap-1'>
									<img src={phone} alt='phone' />
									<a href='tel:+79001202080'>+7 (900) 120 20 80</a>
								</div>
								<div className='flex items-center mt-2 gap-1'>
									<img src={email} alt='email' />
									<a href='mailto:info@glavzoo.ru'>info@glavzoo.ru</a>
								</div>
							</form>
							<div
								className='absolute top-0 right-0 bg-[#4C67EA] p-[10px] cursor-pointer'
								onClick={handleShowNavbar}
							>
								<img src={close} alt='close' />
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	)
}

export default Header
