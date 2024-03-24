import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
	return (
		<>
			<footer className='footer items-center p-4 bg-[#5d8f2e] text-neutral-content mt-[100px]'>
				<aside className='items-center grid-flow-col'>
					<img src={logo} alt='logo' />
					<p className='ml-5 text-[17px] text-[#ffffff]'>© {new Date().getFullYear()}. Все права защищены.</p>
				</aside>
			</footer>
		</>
	)
}

export default Footer
