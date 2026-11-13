export type ProjectCategory = 'ongoing' | 'completed' | 'jam';

export interface ProjectLink {
	label: string;
	href: string;
	/** Internal links use next/link; external ones open in a new tab. */
	internal?: boolean;
}

export interface Project {
	slug: string;
	title: string;
	category: ProjectCategory;
	/** Short line under the title: studio, role, tech or jam theme. */
	meta: string;
	/** Paragraphs shown in the band. Keep each one factual and short. */
	description: string[];
	/** Leave out until there is something worth showing. */
	image?: string;
	links: ProjectLink[];
}

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const categoryInfo: Record<ProjectCategory, { tab: string; title: string; label: string; description: string }> = {
	ongoing: {
		tab: 'Ongoing',
		title: 'Ongoing',
		label: 'Ongoing project, in development',
		description: 'Projects currently in active development.',
	},
	completed: {
		tab: 'Completed',
		title: 'Completed',
		label: 'Completed project',
		description: 'Finished projects built outside of game jams: mentorship, volunteer and spare-time work.',
	},
	jam: {
		tab: 'Game Jams',
		title: 'Game Jams',
		label: 'Game jam, 48 hours',
		description: 'Prototypes built under a 48-hour deadline, each around a fixed theme.',
	},
};

export const projects: Project[] = [
	{
		slug: 'pockets-of-hope',
		title: 'Pockets of Hope',
		category: 'ongoing',
		meta: 'Burnt Bit Games, Lead Programmer, Unity and C#',
		description: [
			'A 2D narrative management game set in the fictional city of Veronka in 1887. Each day you steal in the city, face decision events and manage the night: food, heat, rent and medicine. The choices you make stay with you.',
			'As lead programmer I build the dialogue, quest and decision-event systems, the flag-driven world state, and the Unity Editor tools used to author and debug them.',
		],
		image: `${BASE_PATH}/poh-current.png`,
		links: [
			{ label: 'Read the case study →', href: '/projects/pockets-of-hope/', internal: true },
			{ label: 'Steam page ↗', href: 'https://store.steampowered.com/app/3553990/Pockets_of_Hope/' },
		],
	},
	{
		slug: 'inkeep',
		title: 'Inkeep',
		category: 'ongoing',
		meta: 'Graduation project, solo, Unity and C#',
		description: ['A one-finger mobile strategy and tower-defense roguelite. Early in development, so there is not much to show yet.'],
		links: [],
	},
	{
		slug: 'nevar',
		title: 'NeVar?',
		category: 'ongoing',
		meta: 'Team course project, Mobile Lead, React Native and Expo',
		description: [
			'A gamified mobile app that connects university student clubs with students. Clubs manage their events in one place, and students discover them and earn rewards for attending.',
		],
		links: [],
	},
	{
		slug: 'block-jam-3d-clone',
		title: 'Block Jam 3D Clone',
		category: 'completed',
		meta: 'Mentorship project, Unity and C#',
		description: [
			'A rebuild of the 3D puzzle game Block Jam, made during the mentorship with a focus on clean project architecture.',
			'Built with regular feedback from a senior developer on structure, refactoring and asset handling.',
		],
		image: `${BASE_PATH}/completed-projects-images/blockjam3d.png`,
		links: [{ label: 'GitHub ↗', href: 'https://github.com/Ladger/blockjam3D-clone' }],
	},
	{
		slug: 'tukoyu-kurtar',
		title: 'Tuko’yu Kurtar',
		category: 'completed',
		meta: 'Volunteer project, Unity and C#',
		description: [
			'A game made for the organization ‘Suyun Gözyaşları’, which teaches environmental awareness to primary school students.',
		],
		image: `${BASE_PATH}/completed-projects-images/tukoyu-kurtar.jpg`,
		links: [{ label: 'Gameplay video ↗', href: 'https://www.youtube.com/watch?v=fvBI5HXNcQY' }],
	},
	{
		slug: 'ctrl-alt-escape',
		title: 'CTRL-ALT-ESCAPE',
		category: 'completed',
		meta: 'Spare time project, Unity and C#',
		description: [
			'A maze-escape game dedicated to my data structures lecturer at ITU, Yusuf H. Şahin, who is the playable character.',
		],
		image: `${BASE_PATH}/completed-projects-images/yhs.png`,
		links: [{ label: 'Gameplay video ↗', href: 'https://www.youtube.com/watch?v=Xyfdzd10zwA' }],
	},
	{
		slug: 'singularis',
		title: 'Singularis',
		category: 'jam',
		meta: 'Jamstick Jam, theme Duality',
		description: ['A top-down game about a single soul trying to regain its paired soul.'],
		image: `${BASE_PATH}/gamejam-images/singularis.png`,
		links: [{ label: 'Gameplay video ↗', href: 'https://www.youtube.com/watch?v=TFfUbmloC5w' }],
	},
	{
		slug: 'armstable',
		title: 'Armstable',
		category: 'jam',
		meta: 'Jamination 8, theme Unstable',
		description: ['A 2v2 fighting game where one player controls the body and the other controls the arm, played with Switch Joy-Cons.'],
		image: `${BASE_PATH}/gamejam-images/armstable.png`,
		links: [{ label: 'Gameplay video ↗', href: 'https://www.youtube.com/watch?v=MzoFeiz0ogM' }],
	},
	{
		slug: 'dissolve',
		title: 'Dissolve',
		category: 'jam',
		meta: 'Ruin the Jam, theme Decay',
		description: ['A psychological top-down shooter about a character battling his own subconscious.'],
		image: `${BASE_PATH}/gamejam-images/dissolve.png`,
		links: [{ label: 'Gameplay video ↗', href: 'https://www.youtube.com/watch?v=vKT56Y-RqnY' }],
	},
	{
		slug: 'pockets-of-hope-jam',
		title: 'Pockets of Hope (jam version)',
		category: 'jam',
		meta: 'Jamination 7, theme Capture',
		description: ['A survival management game about a pickpocket trying to save his brother. It became the starting point for the full game.'],
		image: `${BASE_PATH}/gamejam-images/poh.png`,
		links: [{ label: 'Gameplay video ↗', href: 'https://www.youtube.com/watch?v=IP3omQYllPY' }],
	},
];

export const socialLinks = [
	{ label: 'GitHub', href: 'https://github.com/Ladger' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/berk-%C3%B6zcan-168839254/' },
	{ label: 'itch.io', href: 'https://ladger.itch.io/' },
	{ label: 'YouTube', href: 'https://www.youtube.com/@berkozcan17' },
];

export const skillGroups = [
	{ title: 'Game development', items: ['Unity', 'Gameplay programming', 'Unity Editor scripting', 'Custom tool building'] },
	{ title: 'Languages', items: ['C#', 'C++', 'Python'] },
	{ title: 'Engineering', items: ['Object-oriented programming', 'Modular architecture', 'Design patterns'] },
	{ title: 'Tools', items: ['Git', 'Rider', 'Unity Editor'] },
];
