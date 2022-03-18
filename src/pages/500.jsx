import { Box, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Custom500() {
	return (
		<SimpleGrid columns={2}>
			<Box />
			<Box>
				<Image src='/404.svg' objectFit='cover' layout='fill' />
			</Box>
		</SimpleGrid>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			// You can get the messages from anywhere you like. The recommended
			// pattern is to put them in JSON files separated by language and read
			// the desired one based on the `locale` received from Next.js.
			messages: (await import(`../../translations/${locale}.json`)).default,
		},
	}
}
