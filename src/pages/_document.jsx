import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		// eslint-disable-next-line no-underscore-dangle
		const { locale } = this.props.__NEXT_DATA__
		const dir = locale === 'ar' ? 'rtl' : 'ltr'
		return (
			<Html>
				<Head />
				<body dir={dir} lang={locale}>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
