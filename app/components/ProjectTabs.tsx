'use client';

import { useEffect, useState } from 'react';
import { Project, ProjectCategory, categoryInfo } from '@/app/data/projects';
import ProjectBand from './ProjectBand';

const order: ProjectCategory[] = ['ongoing', 'completed', 'jam'];
const hashFor: Record<ProjectCategory, string> = { ongoing: 'ongoing', completed: 'completed', jam: 'jams' };

function fromHash(hash: string): ProjectCategory {
	const h = hash.replace('#', '');
	return order.find((c) => hashFor[c] === h) ?? 'ongoing';
}

export default function ProjectTabs({ projects }: { projects: Project[] }) {
	const [active, setActive] = useState<ProjectCategory>('ongoing');

	useEffect(() => {
		setActive(fromHash(window.location.hash));
		const onHash = () => setActive(fromHash(window.location.hash));
		window.addEventListener('hashchange', onHash);
		return () => window.removeEventListener('hashchange', onHash);
	}, []);

	const select = (c: ProjectCategory) => {
		setActive(c);
		// Keep the tab in the URL so it can be shared; no server needed.
		window.history.replaceState(null, '', `#${hashFor[c]}`);
	};

	const visible = projects.filter((p) => p.category === active);

	return (
		<section id="work">
			<div
				role="tablist"
				aria-label="Project categories"
				className="sticky top-0 z-10 flex flex-wrap gap-2 gutter bg-paper border-y border-rule"
			>
				{order.map((c) => {
					const count = projects.filter((p) => p.category === c).length;
					const on = c === active;
					return (
						<button
							key={c}
							role="tab"
							aria-selected={on}
							onClick={() => select(c)}
							className={`font-display text-2xl font-bold uppercase px-5 sm:px-7 py-5 border-b-4 ${
								on ? 'border-burgundy text-burgundy' : 'border-transparent text-ink-muted hover:text-ink'
							}`}
						>
							{categoryInfo[c].tab} ({count})
						</button>
					);
				})}
			</div>

			<div role="tabpanel">
				<div className="gutter pt-14 pb-12 bg-paper border-b border-rule flex flex-wrap gap-4 lg:gap-14 items-baseline">
					<h2 className="text-5xl leading-none font-bold uppercase text-burgundy">{categoryInfo[active].title}</h2>
					<p className="flex-[1_1_400px] max-w-[760px] text-lg text-ink-soft">{categoryInfo[active].description}</p>
				</div>
				{visible.map((p) => {
					// Colour and image side alternate across the whole list, not per tab.
					const i = projects.indexOf(p);
					return <ProjectBand key={p.slug} project={p} dark={i % 2 === 0} mirrored={i % 2 === 1} />;
				})}
			</div>
		</section>
	);
}
