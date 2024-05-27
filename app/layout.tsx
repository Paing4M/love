import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['500', '700', '900'],
	variable: '--roboto-font',
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
			<body className={roboto.variable} suppressHydrationWarning>
				{children}
			</body>
		</html>
	)
}
