import Image from 'next/image';
import { BASE_PATH } from '@/app/data/projects';

export default function Hero() {
	return (
		<section className="flex flex-wrap gap-12 lg:gap-16 gutter pt-16 pb-14 lg:pt-24 lg:pb-20 items-end">
			<div className="flex-[1_1_560px] min-w-0">
				<div className="font-display text-lg font-semibold tracking-[0.12em] uppercase text-burgundy mb-6">Game Developer</div>
				<h1 className="text-6xl sm:text-7xl lg:text-[84px] leading-none font-bold uppercase">Berk Özcan</h1>
				<p className="mt-6 text-[19px] text-ink-soft max-w-[640px]">
					Game Developer with a Computer Engineering background and experience in professional game development and indie production. Works in
					Unity and C#, mainly on gameplay systems, modular architecture and custom editor tools.
				</p>
				<div className="flex flex-wrap gap-7 mt-9 text-[15px] font-semibold">
					<a href="#work" className="bg-burgundy text-white px-6 py-3.5">
						See the work
					</a>
					<a href={`${BASE_PATH}/berkozcan-cv.pdf`} target="_blank" rel="noopener noreferrer" className="py-3.5 border-b-2 border-burgundy">
						Download CV
					</a>
				</div>
			</div>
			<div className="flex-[0_1_300px] flex flex-col gap-5">
				<Image src={`${BASE_PATH}/portrait.jpeg`} alt="Portrait of Berk Özcan" width={600} height={750} className="w-full h-auto" />
				<div className="text-sm text-ink-soft border-t-2 border-burgundy pt-3.5 flex flex-col gap-1.5">
					<div>
						<b className="text-ink">Now</b>, Pockets of Hope, Burnt Bit Games
					</div>
					<div>
						<b className="text-ink">Last</b>, TaleWorlds Entertainment, 2026
					</div>
					<div>
						<b className="text-ink">Studying</b>, Computer Engineering, ITU, 2027
					</div>
				</div>
			</div>
		</section>
	);
}
