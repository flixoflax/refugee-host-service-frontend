import React from 'react'
import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Container,
} from '@chakra-ui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import DesktopNav from './desktop/DesktopNav'
import MobileNav from './mobile/MobileNav'
import LanguageMenu from '../menus/LanguageMenu'

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure()
	const t = useTranslations('Navbar')

	return (
		<Box
			borderBottom={1}
			borderStyle='solid'
			borderColor={useColorModeValue('gray.200', 'gray.900')}
			bg={useColorModeValue('white', 'gray.800')}
			color={useColorModeValue('gray.600', 'white')}
			position='fixed'
			width='100%'
			zIndex={999}
		>
			<Container maxW='container.xl'>
				<Flex minH='70px' py={{ base: 2 }} align='center'>
					<Flex
						flex={{ base: 0, md: 'auto' }}
						ml={{ base: -2 }}
						display={{ base: 'flex', md: 'none' }}
					>
						<IconButton
							onClick={onToggle}
							icon={
								isOpen ? (
									<Icon as={XIcon} w={5} h={5} />
								) : (
									<Icon as={MenuIcon} w={5} h={5} />
								)
							}
							variant='ghost'
							aria-label='Toggle Navigation'
						/>
					</Flex>
					<Flex
						flex={{ base: 1 }}
						justify={{ base: 'left', md: 'start' }}
						ml={{ base: 2, md: 0 }}
					>
						<Text
							textAlign={useBreakpointValue({ base: 'left', md: 'left' })}
							fontFamily='heading'
							fontWeight='bold'
							fontSize={{ base: 'lg', md: 'lg' }}
							color={useColorModeValue('gray.900', 'white')}
							cursor='pointer'
						>
							<Link href='/'>{t('title')}</Link>
						</Text>

						<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
							<DesktopNav />
						</Flex>
					</Flex>

					<Stack
						flex={{ base: 1, md: 0 }}
						justify='flex-end'
						direction='row'
						spacing={6}
					>
						<LanguageMenu />
						<Button fontWeight={600} as='a' variant='link' href='#'>
							{t('login')}
						</Button>
						<Button
							display={{ base: 'none', md: 'inline-flex' }}
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
					</Stack>
				</Flex>
			</Container>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	)
}
