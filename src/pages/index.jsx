import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
	return (
		<Container maxW='container.xl' pt={20}>
			<Heading>Refugee Host Service</Heading>
			<Text mt={4}>Frontend project to support refugees.</Text>
		</Container>
	)
}
