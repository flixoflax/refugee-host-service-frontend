import {
	Box,
	Button,
	Flex,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { without } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import Link from 'next/link'

function mapLocaleToCountryCode(locale) {
	if (locale === 'en') {
		return 'US'
	}
	return locale
}

export default function LanguageMenu() {
	const { locale, locales, asPath } = useRouter()

	return (
		<Menu placement='bottom'>
			<MenuButton
				as={Button}
				rightIcon={<Icon as={ChevronDownIcon} />}
				alignContent='center'
				bg='white'
				_hover={{
					bg: 'gray.50',
				}}
				_active={{
					bg: 'gray.50',
				}}
			>
				<Box minW='1.5em'>
					<ReactCountryFlag
						countryCode={mapLocaleToCountryCode(locale)}
						svg
						style={{
							width: '1.5em',
							height: '1em',
						}}
					/>
				</Box>
			</MenuButton>
			<MenuList minW={0} w='auto'>
				{without(locales, locale).map((l) => (
					<LanguageMenuItem key={l} locale={l} path={asPath} />
				))}
			</MenuList>
		</Menu>
	)
}

function LanguageMenuItem({ locale, path }) {
	const countryCode = mapLocaleToCountryCode(locale)
	return (
		<MenuItem>
			<Link href={path} passHref locale={locale}>
				<Flex minW='1.5em' alignItems='center'>
					<ReactCountryFlag
						countryCode={countryCode}
						svg
						style={{
							width: '1.5em',
							height: '1em',
						}}
					/>
					<Text ml={2} fontWeight='bold' textTransform='uppercase'>
						{countryCode}
					</Text>
				</Flex>
			</Link>
		</MenuItem>
	)
}
