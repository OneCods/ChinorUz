'use client'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import { GlobalStyle } from '../styles/GlobalStyle'

function Page() {
	return (
		<>
			<Header />
			<Hero />
			<Footer />
			<GlobalStyle />
		</>
	)
}

export default Page
