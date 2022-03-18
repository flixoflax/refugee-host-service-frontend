import { Divider, Heading, Link as ChakraLink, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Home() {
	return (
		<>
			<Heading>Refugee Host Service</Heading>
			<Text mt={4}>Frontend project to support refugees.</Text>
			<Divider my={4} />
			<Link href='/refugee/registration' passHref>
				<ChakraLink color='blue.500'>Refugee registration</ChakraLink>
			</Link>
		</>
	)
}
