import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Aos from 'aos'
import Products from './components/Products'
import News from './components/News'
import Tovar from './components/Tovar'
import Form from './components/Form'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Adminpanel from './components/adminpanel'
import About from './pages/About'
import AboutFromTexts from './components/AboutFromTexts'

function App() {
	useEffect(() => {
		Aos.init({})
	}, [])

	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={
						<div>
							<Header />
							<Hero />
							<Products />
							<News />
							{/* <Tovar /> */}
							<Form />
							<AboutFromTexts />
							<Footer />
						</div>
					}
				/>
				<Route path='/adminpanelglavzooo' element={<Adminpanel />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	)
}

export default App
