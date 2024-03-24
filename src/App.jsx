import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Aos from 'aos'
import Products from './components/Products'
import News from './components/News'
import Tovar from './components/Tovar'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
    
	useEffect(() => {
		Aos.init({})
	}, [])

	return (
		<div>
			<Header />
			<Hero />
			<Products />
			<News />
			<Tovar />
			<Form />
			<Footer />
		</div>
	)
}

export default App
