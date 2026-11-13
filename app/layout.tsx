import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';

const barlow = Barlow({
	variable: '--font-barlow',
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '500', '600', '700'],
});

const barlowCondensed = Barlow_Condensed({
	variable: '--font-condensed',
	subsets: ['latin', 'latin-ext'],
	weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Berk Ozcan - Game Developer',
	description:
     'Game Developer with a Computer Engineering background and experience in professional game development and indie production. Unity, C#, gameplay systems and custom editor tools.',
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
		description: 'Game Developer with a Computer Engineering background and experience in professional game development and indie production. Unity, C#, gameplay systems and custom editor tools.',
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
			<body className={`${barlow.variable} ${barlowCondensed.variable} font-sans antialiased`}>
				<SiteHeader />
				{children}
				<Footer />
			</body>
		</html>
	);
}
