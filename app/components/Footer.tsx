import { socialLinks, BASE_PATH } from '@/app/data/projects';

export default function Footer() {
	return (
		<footer id="footer" className="bg-burgundy text-[#f3e6ea] gutter pt-14 pb-8">
			<div className="flex flex-wrap justify-between gap-8 lg:gap-20 items-start">
				<div>
					<h2 className="text-4xl font-bold text-white leading-none mb-3">Contact</h2>
					<a href="mailto:berk.ozcan714@gmail.com" className="text-xl text-white border-b-2 border-white">
						berk.ozcan714@gmail.com
					</a>
				</div>
				<div className="flex flex-wrap gap-x-8 gap-y-3 text-base font-medium pt-1.5">
					{socialLinks.map((l) => (
						<a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
							{l.label} ↗
						</a>
					))}
					<a href={`${BASE_PATH}/berkozcan-cv.pdf`} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
						CV ↓
					</a>
				</div>
			</div>
			<div className="mt-10 pt-4 border-t border-burgundy-light text-[13px] text-[#d9b8c1]">© {new Date().getFullYear()} Berk Özcan, Istanbul, Turkey</div>
		</footer>
	);
}
