import { Box, Button, Code, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Custom404() {
	return (
		<SimpleGrid columns={{ base: 1, md: 2 }}>
			<Box height={{ base: '20rem', md: '30rem' }} position='relative'>
				<Image src='/404.svg' layout='fill' objectFit='contain' />
			</Box>
			<Flex justify='center' flexDirection='column'>
				<Box m={{ md: 10 }}>
					<Code size='md' color='gray.600' mb={2}>
						404 - NOT FOUND
					</Code>
					<Heading>The page you were looking for could not be found.</Heading>
					<Button
						bg='green.400'
						color='white'
						size='lg'
						my={10}
						_hover={{
							bg: 'green.300',
						}}
					>
						Get back on track
					</Button>
				</Box>
			</Flex>
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
