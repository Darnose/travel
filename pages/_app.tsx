import '../src/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"

const App = ({ Component, pageProps: { session, ...pageProps} }: AppProps) => {
	return (
		<SessionProvider session={session}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default App;