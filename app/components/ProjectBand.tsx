import Image from 'next/image';
import Link from 'next/link';
import { Project, categoryInfo } from '@/app/data/projects';

interface Props {
	project: Project;
	/** Dark = burgundy band; mirrored = image on the right. Text is always left-aligned. */
	dark: boolean;
	mirrored: boolean;
}

export default function ProjectBand({ project, dark, mirrored }: Props) {
	const label = dark ? 'text-[#d9b8c1]' : 'text-ink-muted';
	const body = dark ? 'text-[#f3e6ea]' : 'text-ink-soft';
	const title = dark ? 'text-white' : 'text-ink';
	return (
		<article className={`${dark ? 'bg-burgundy' : 'bg-paper'} gutter py-16 lg:py-24`}>
			<div className={`flex flex-wrap ${mirrored ? 'flex-row-reverse' : ''} gap-10 lg:gap-14 items-start`}>
				{project.image && (
					<div className="flex-[1_1_560px] self-start">
						<Image src={project.image} alt={project.title} width={0} height={0} sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-auto" />
					</div>
				)}
				<div className={`${project.image ? 'flex-[1_1_400px]' : 'flex-[1_1_100%] max-w-3xl'} flex flex-col justify-between gap-7 text-left`}>
					<div>
						<div className={`font-display text-lg font-semibold tracking-[0.1em] uppercase mb-3.5 ${label}`}>
							{categoryInfo[project.category].label}
						</div>
						<h2 className={`text-5xl lg:text-[56px] leading-none font-bold mb-2 ${title}`}>{project.title}</h2>
						<div className={`text-[15px] mb-5 ${label}`}>{project.meta}</div>
						{project.description.map((p) => (
							<p key={p} className={`mb-4 text-lg ${body}`}>
								{p}
							</p>
						))}
					</div>
					{project.links.length > 0 && (
					<div className="flex flex-wrap gap-6 text-[15px] font-semibold">
						{project.links.map((l, i) => {
							const primary = i === 0;
							const cls = primary
								? `${dark ? 'bg-white text-burgundy' : 'bg-burgundy text-white'} px-6 py-3.5`
								: `py-3.5 border-b-2 ${dark ? 'border-white text-white' : 'border-burgundy text-ink'}`;
							return l.internal ? (
								<Link key={l.href} href={l.href} className={cls}>
									{l.label}
								</Link>
							) : (
								<a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
									{l.label}
								</a>
							);
						})}
					</div>
					)}
				</div>
			</div>
		</article>
	);
}
