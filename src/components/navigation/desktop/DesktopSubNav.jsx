import {
	Box,
	Flex,
	Icon,
	Link as ChakraLink,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function DesktopSubNav({ label, href, subLabel }) {
	const t = useTranslations('Navbar')
	return (
		<Link href={href} passHref>
			<ChakraLink
				role='group'
				display='block'
				p={2}
				rounded='md'
				_hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
			>
				<Stack direction='row' align='center'>
					<Box>
						<Text
							transition='all .3s ease'
							_groupHover={{ color: 'green.400' }}
							fontWeight={500}
						>
							{t(label)}
						</Text>
						<Text fontSize='sm'>{t(subLabel)}</Text>
					</Box>
					<Flex
						transition='all .3s ease'
						transform='translateX(-10px)'
						opacity={0}
						_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
						justify='flex-end'
						align='center'
						flex={1}
					>
						<Icon color='green.400' w={5} h={5} as={ChevronRightIcon} />
					</Flex>
				</Stack>
			</ChakraLink>
		</Link>
	)
}
