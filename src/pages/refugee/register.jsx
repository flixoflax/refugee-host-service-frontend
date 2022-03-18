import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function Registration() {
	return <Heading>Refugee Registration</Heading>
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			// You can get the messages from anywhere you like. The recommended
			// pattern is to put them in JSON files separated by language and read
			// the desired one based on the `locale` received from Next.js.
			messages: (await import(`../../../translations/${locale}.json`)).default,
		},
	}
}
