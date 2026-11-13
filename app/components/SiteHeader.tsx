import Link from 'next/link';
import { BASE_PATH } from '@/app/data/projects';

const linkClass = 'hover:text-burgundy transition-colors';

export default function SiteHeader() {
	return (
		<header className="flex flex-wrap items-center justify-between gap-4 gutter py-6 border-b border-rule">
			<Link href="/" className="font-bold text-lg">
				Berk Özcan
			</Link>
			<nav className="flex flex-wrap gap-6 sm:gap-8 text-[15px] font-medium">
				<Link href="/#work" className={linkClass}>
					Work
				</Link>
				<a href="#footer" className={linkClass}>
					Contact
				</a>
				<a href={`${BASE_PATH}/berkozcan-cv.pdf`} target="_blank" rel="noopener noreferrer" className="text-burgundy font-semibold">
					CV ↓
				</a>
			</nav>
		</header>
	);
}
