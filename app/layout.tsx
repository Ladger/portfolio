import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Berk Ozcan - Game Developer',
	description:
     'I am passionate, diciplened and open to learn. The games that I am developing is a great reflection of these attributes.',
	keywords: [
        'Game Developer',
        'Unity',
        'CS',
        'Python',
        'CPP',
		'Clean Code',
		'Berk Özcan',
	],
	authors: [{ name: 'Berk Özcan' }],
	creator: 'Berk Özcan',
	openGraph: {
		title: 'Berk Özcan - Developer Portfolio',
		description: 'I am passionate, diciplened and open to learn. The games that I am developing is a great reflection of these attributes.',
		url: 'https://berkozcan.com',
		siteName: 'Berk Özcan - Portfolio',
		images: [
			{
				url: '/portrait.jpeg',
				width: 1200,
				height: 630,
				alt: 'Berk Özcan - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
