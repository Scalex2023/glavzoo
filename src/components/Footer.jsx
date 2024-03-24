import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
	return (
		<>
			<footer className='footer items-center p-4 bg-neutral text-neutral-content mt-[100px]'>
				<aside className='items-center grid-flow-col'>
					<img src={logo} alt='logo' />
					<p>Copyright © 2024 - All right reserved</p>
				</aside>
			</footer>
		</>
	)
}

export default Footer
