import { skillGroups } from '@/app/data/projects';

export default function Skills() {
	return (
		<section className="bg-paper-tint gutter py-20">
			<div className="flex flex-wrap gap-10 border-t-2 border-ink pt-7">
				{skillGroups.map((g) => (
					<div key={g.title} className="flex-[1_1_200px]">
						<div className="font-bold mb-2.5">{g.title}</div>
						<ul className="text-ink-soft leading-8">
							{g.items.map((i) => (
								<li key={i}>{i}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
