import {
	Box,
	Button,
	Code,
	Flex,
	Heading,
	SimpleGrid,
	Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Custom404() {
	const t = useTranslations('404')
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
					<Heading>{t('title')}</Heading>
					<Link href='/' passHref>
						<Button
							as={Text}
							bg='green.400'
							color='white'
							size='lg'
							my={10}
							_hover={{
								bg: 'green.300',
							}}
						>
							{t('button')}
						</Button>
					</Link>
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
