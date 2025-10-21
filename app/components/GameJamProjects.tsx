import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: "Pockets of Hope",
        description: "Survival management game about a pickpocket who tries save his brother. Created in 'Jamination 7' under 48 hours. (Theme: Capture)",
        imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/gamejam-images/poh.png`,
        projectUrl: "https://www.youtube.com/watch?v=IP3omQYllPY",
        buttonText: "Gameplay Video →"
    },
    {
        id: 2,
        title: "Dissolve",
        description: "Psychological top-down shooter about a character battling his subconscious. Created in 'Ruin the Jam' under 48 hours. (Theme: Decay)",
        imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/gamejam-images/dissolve.png`,
        projectUrl: "https://ladger.itch.io/dissolve",
        buttonText: "Open Itch →"
    },
    {
        id: 3,
        title: "Armstable",
        description: "2V2 fighting game, one player controls the body and other is the arm with Switch joycon. Created in 'Jamination 8' under 48 hours. (Theme: Unstable)",
        imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/gamejam-images/armstable.png`,
        projectUrl: "https://ladger.itch.io/armstable",
        buttonText: "Open Itch →"
    }
];

export default function GameJamProjects() {
	return (
        <section className="py-12 sm:py-20 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Game Jam Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[...projects].reverse().map((project) => (
                        <div key={project.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                                <div className="flex gap-2">
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                                        {project.buttonText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
	);
}
