import '@css/globals.css'
import type { Metadata } from 'next'
import { Root } from '@components/Layout'
import AnalyticsWrapper from '@components/.../analytics'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import BackToTop from '@components/BackToTop'
import localFont from 'next/font/local'
import clsx from 'clsx'

const inter = localFont({
	src: './fonts/inter.woff2',
	weight: '700',
	variable: '--font-display',
	display: 'swap',
})

const sohne = localFont({
	src: './fonts/sohne.woff2',
	weight: '400',
	variable: '--font-sans',
	display: 'swap',
})

export const metadata: Metadata = {
	title: { default: 'Maxwell Young', template: '%s — Maxwell Young' },
	creator: 'Maxwell Young',
	publisher: 'Maxwell Young',
	description: 'Building polished user interfaces.',
	keywords: ['Maxwell Young', 'internetmaxwell', 'web development', 'design'],
	authors: [{ name: 'Maxwell Young', url: 'https://maxwellyoung.info' }],
	colorScheme: 'dark light',
	openGraph: {
		title: 'Maxwell Young',
		description: 'Building tools and polished user interactions.',
		url: 'https://maxwellyoung.info',
		siteName: 'Maxwell Young',
		images: [
			{ url: 'https://maxwellyoung.info/og.png', width: 1200, height: 630 },
			{
				url: 'https://maxwellyoung.info/og-alt.png',
				width: 1200,
				height: 630,
				alt: 'A white background with the text "Maxwell Young" in the center',
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicons/favicon.jpg',
		shortcut: '/favicons/shortcut.png',
		apple: [
			{ url: '/favicons/apple-touch-icon.png' },
			{
				url: '/favicons/apple-icon-x3.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
		other: {
			rel: 'apple-touch-icon-precomposed',
			url: '/favicons/apple-touch-icon-precomposed.png',
		},
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#E5E5E5' },
		{ media: '(prefers-color-scheme: dark)', color: '#121212' },
	],
	twitter: {
		card: 'summary_large_image',
		title: 'Maxwell Young',
		description: 'Building tools and polished user interactions.',
		siteId: 'internetmaxwell',
		creator: '@internetmaxwell',
		creatorId: 'internetmaxwell',
		images: {
			url: 'https://maxwellyoung.info/og.png',
			alt: 'A black background with noise and "Maxwell Young" written across the center',
		},
	},
	verification: {
		google: 'VWhTtgTikPqvWIY4n2rlUj6Fe9YgkfFMEET3TM7Rce0',
		yandex: 'cfc27cbb03eb0a9c',
		yahoo: 'yahoo',
		other: { me: ['maxtheyoung@gmail.com'] },
	},
	alternates: {
		canonical: 'https://maxwellyoung.info',
		types: { 'application/rss+xml': 'https://maxwellyoung.info/rss.xml' },
	},
	assets: ['https://maxwellyoung.info/assets.zip'],
	category: 'technology',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className={clsx(inter.variable, sohne.variable)}>
		<body>
			<Nav />
			<Root>{children}</Root>
			<BackToTop />
			<Footer />
			<AnalyticsWrapper />
		</body>
	</html>
)

export default RootLayout
