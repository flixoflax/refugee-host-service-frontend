import { Container } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../navigation/Navbar'

export default function MainLayout({ children }) {
	return (
		<>
			<Navbar />
			<Container maxW='container.xl' pt={{ base: 24, md: 36 }}>
				{children}
			</Container>
		</>
	)
}
