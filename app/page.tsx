'use client'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Main from '../components/Main/Main'
import { GlobalStyle } from '../styles/GlobalStyle'

function Page() {
	return (
		<>
			<Header />
			<Hero />
			<Main />
			<Footer />
			<GlobalStyle />
		</>
	)
}

export default Page
