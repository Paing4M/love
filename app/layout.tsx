import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: '400',
})

export const metadata: Metadata = {
	title: 'My Lady | I love you so much',
	description: 'Only for my lady',
	icons: {
		icon: '/loveIcon.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={roboto.className}>{children}</body>
		</html>
	)
}
