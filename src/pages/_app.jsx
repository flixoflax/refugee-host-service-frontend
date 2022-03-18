import '../styles/globals.css'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from '../components/layout/MainLayout'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</ChakraProvider>
	)
}

export default MyApp
