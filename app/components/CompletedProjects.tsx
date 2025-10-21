import Image from 'next/image';

// 1. Define your project data as an array of objects
const projects = [
    {
        id: 1,
        title: "CTRL-ALT-ESCAPE",
        description: "Spare time project that is dedicated to my data structure lecturer Yusuf H. Şahin from ITU. Maze escape game that you play as my lecturer.",
        imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/completed-projects-images/yhs.png`,
        projectUrl: "https://www.youtube.com/watch?v=Xyfdzd10zwA",
        buttonText: "Gameplay Video →"
    },
    {
        id: 2,
        title: "Tucan'ı Kurtar",
        description: "Volunteer project for the organization 'Suyun Gözyaşları' which they are teaching the environmental awareness to primary school students.",
        imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/completed-projects-images/suyun-gozyaslari.png`,
        projectUrl: "#",
        buttonText: "Upcoming →"
    },
    {
        id: 3,
        title: "Block Jam 3D Clone",
        description: "Volunteer internship project given by senior developer Hüseyin Erdoğan. Replicating the original game Block Jam 3D with clean code structure",
        imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/completed-projects-images/blockjam3d.png`,
        projectUrl: "https://github.com/Ladger/blockjam3D-clone",
        buttonText: "Github Files →"
    }
];

export default function CompletedProjects() {
    return (
        <section className="py-12 sm:py-20 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Completed Projects</h2>
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