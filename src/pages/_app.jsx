import '../styles/globals.css'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { NextIntlProvider } from 'next-intl'
import MainLayout from '../components/layout/MainLayout'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<NextIntlProvider messages={pageProps.messages}>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</NextIntlProvider>
		</ChakraProvider>
	)
}

export default MyApp
