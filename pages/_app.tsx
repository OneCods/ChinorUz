import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main>
			<Component {...pageProps} />
			<GlobalStyle />
		</main>
	)
}

export default MyApp
