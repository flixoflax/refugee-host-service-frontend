import React from 'react'
import Link from 'next/link'
import {
	Box,
	Button,
	Collapse,
	Flex,
	Icon,
	Link as ChakraLink,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useTranslations } from 'next-intl'
import NAV_ITEMS from '../data'

export default function MobileNav() {
	const t = useTranslations('Navbar')
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			p={4}
			display={{ md: 'none' }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
			<Box>
				<Button
					mt={5}
					width='full'
					fontSize={{ base: 'sm', md: 'md' }}
					fontWeight={600}
					color='white'
					bg='green.400'
					href='#'
					_hover={{
						bg: 'green.300',
					}}
				>
					{t('become_a_volunteer')}
				</Button>
			</Box>
		</Stack>
	)
}

function MobileNavItem({ label, children, href }) {
	const { isOpen, onToggle } = useDisclosure()
	const t = useTranslations('Navbar')

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={ChakraLink}
				href={href ?? '#'}
				justify='space-between'
				align='center'
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Text
					fontWeight={600}
					color={useColorModeValue('gray.600', 'gray.200')}
				>
					{t(label)}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition='all .25s ease-in-out'
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle='solid'
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					align='start'
				>
					{children &&
						children.map((child) => (
							<Link key={child.label} passHref href={child.href}>
								<ChakraLink py={2}>{t(child.label)}</ChakraLink>
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	)
}
