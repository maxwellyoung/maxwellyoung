import '../styles/globals.css'
import '@tremor/react/dist/esm/tremor.css'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	)
}
