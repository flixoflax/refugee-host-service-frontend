/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'de', 'ua', 'ru'],
		defaultLocale: 'en',
	},
	images: {
		domains: ['countryflagsapi.com'],
	},
}

module.exports = nextConfig
