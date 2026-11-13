import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_PATH } from '@/app/data/projects';

export const metadata: Metadata = {
	title: 'Pockets of Hope - Case study | Berk Özcan',
	description: 'Case study of the gameplay systems and editor tools I built as lead programmer on Pockets of Hope, a narrative management game.',
};

const meta = [
	{ label: 'Role', value: 'Co-founder, Lead Programmer' },
	{ label: 'Studio', value: 'Burnt Bit Games' },
	{ label: 'Engine', value: 'Unity, C#' },
	{ label: 'Genre', value: 'Narrative management, 2D' },
	{ label: 'Since', value: '2024' },
];

const systems = [
	{
		letter: 'A',
		title: 'Dialogue, quest and faction systems',
		text: [
			'The core narrative layer: graph-based dialogue with conditions and actions, quests that track their own progress, and decision events that chain into follow-ups on later days.',
		],
	},
	{
		letter: 'B',
		title: 'A Dialogue Graph editor inside Unity',
		text: ['A custom Unity Editor tool that lets dialogue be laid out as a graph instead of edited as data, so writing and wiring happen in the same place.'],
	},
	{
		letter: 'C',
		title: 'Persistent world state and debug tooling',
		text: [
			'A flag system records what the player has done, so narrative consequences persist. A debug panel with presets lets us set up a run and inspect those flags while testing.',
		],
	},
];

const decisions = [
	{
		title: 'Content as ScriptableObjects',
		text: 'Items, events, quests and dialogue are assets with automatically assigned IDs, collected into databases by editor tooling. Designers add content without touching code.',
	},
	{
		title: 'Interfaces and adapters at boundaries',
		text: 'The dialogue system reaches other systems only through interfaces, with one adapter per manager. It stays testable and does not spread dependencies.',
	},
	{
		title: 'Tools as part of the design',
		text: 'Custom editor windows and a debug panel were built alongside the systems, so each new feature shipped with a way to author and test it.',
	},
];

const labelClass = 'font-display text-lg font-semibold tracking-[0.1em] uppercase text-burgundy';
const padX = 'gutter';

export default function PocketsOfHopePage() {
	return (
		<main>
			<div className={`${padX} pt-16 lg:pt-20 pb-10`}>
				<Link href="/#work" className="text-[15px] font-medium hover:text-burgundy">
					← All work
				</Link>
				<div className={`${labelClass} mt-10 mb-5`}>Case study</div>
				<h1 className="text-6xl lg:text-[84px] leading-none font-bold uppercase">Pockets of Hope</h1>
				<p className="mt-6 text-2xl text-ink-soft max-w-[820px]">
					A 2D narrative management game from Burnt Bit Games. I am the lead programmer, responsible for the gameplay systems and editor tools.
				</p>
			</div>

			<dl className={`gutter-m py-6 border-t-2 border-ink border-b border-b-rule flex flex-wrap gap-x-14 gap-y-5 text-[15px]`}>
				{meta.map((m) => (
					<div key={m.label}>
						<dt className="font-display text-sm uppercase tracking-wider text-ink-muted">{m.label}</dt>
						<dd className="font-semibold mt-1">{m.value}</dd>
					</div>
				))}
			</dl>

			<div className={`${padX} mt-14`}>
				<div>
					<Image src={`${BASE_PATH}/poh-current.png`} alt="Pockets of Hope" width={0} height={0} sizes="100vw" className="w-full h-auto" />
				</div>
			</div>

			<section className={`${padX} pt-20 pb-6 flex flex-wrap gap-10 lg:gap-14`}>
				<h2 className="flex-[1_1_280px] text-4xl font-bold uppercase text-burgundy leading-none">The game</h2>
				<div className="flex-[2_1_520px] max-w-3xl">
					<p className="text-2xl leading-snug mb-5">
						Veronka, 1887. Two brothers, a city that doesn&apos;t care about them, and a handful of factions who will help for a price.
					</p>
					<p className="text-lg text-ink-soft mb-5">
						Each day runs as a loop: steal in the city, face decision events, manage the night (food, heat, rent and medicine), read the newspaper, and start again. The game began as a 48-hour jam prototype
						about a pickpocket trying to save his brother, and grew into a full production.
					</p>
					<a
						href="https://store.steampowered.com/app/3553990/Pockets_of_Hope/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block mt-2 font-semibold border-b-2 border-burgundy"
					>
						Steam page ↗
					</a>
				</div>
			</section>

			<section className={`bg-burgundy text-[#f3e6ea] ${padX} py-20 mt-16 flex flex-wrap gap-10 lg:gap-14`}>
				<h2 className="flex-[1_1_280px] text-4xl font-bold uppercase text-white leading-none">The engineering problem</h2>
				<div className="flex-[2_1_520px] max-w-3xl">
					<p className="font-display text-[34px] leading-tight font-semibold text-white mb-6">
						Player decisions have to change what is possible later, so the dialogue, quest and faction systems need to share state without
						depending on each other.
					</p>
					<p className="text-lg">
						Dialogue, quests, events and the world all react to the same set of facts. The goal was a design where a writer can add a
						consequence without a programmer, and a programmer can add a system without breaking the story.
					</p>
				</div>
			</section>

			<section className={`${padX} pt-20`}>
				<h2 className="text-4xl font-bold uppercase text-burgundy leading-none mb-10">What I built</h2>
				{systems.map((s, i) => (
					<div key={s.letter} className={`py-10 border-t ${i === 0 ? 'border-t-2 border-ink' : 'border-rule'} flex flex-wrap gap-6 lg:gap-14`}>
						<div className="flex-[0_0_60px] font-display text-3xl font-bold text-burgundy">{s.letter}</div>
						<h3 className="flex-[1_1_300px] text-[34px] leading-tight font-bold">{s.title}</h3>
						<div className="flex-[2_1_420px] text-lg text-ink-soft">
							{s.text.map((t) => (
								<p key={t}>{t}</p>
							))}
						</div>
					</div>
				))}
			</section>

			<section className={`${padX} pt-16 pb-24`}>
				<h2 className="text-4xl font-bold uppercase text-burgundy leading-none mb-8">Architecture decisions</h2>
				<div className="flex flex-wrap gap-6">
					{decisions.map((d) => (
						<div key={d.title} className="flex-[1_1_280px] bg-white border-t-[6px] border-burgundy p-8">
							<h3 className="text-[26px] font-bold mb-2.5">{d.title}</h3>
							<p className="text-base text-ink-soft">{d.text}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
