import React from 'react'
import logo from '../assets/logo_white.png'

function Footer() {
	return (
		<>
			<footer className='footer items-center p-4 bg-[#4C67EA] text-neutral-content mt-[220px]'>
				<aside className='items-center grid-flow-col'>
					<img src={logo} alt='logo' className='opacity-80' />
					<p className='ml-5 text-[17px] text-[#ffffff]'>© {new Date().getFullYear()}. Все права защищены.</p>
				</aside>
			</footer>
		</>
	)
}

export default Footer
