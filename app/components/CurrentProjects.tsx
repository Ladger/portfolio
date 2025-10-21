import Image from 'next/image';

export default function CurrentProjects() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Active Projects</h2>
				<div className="flex justify-center">
					{[1].map((project) => (
						<div key={project} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/poh-current.png`} alt={`Project ${project}`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Pockets of Hope</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">A story-generator management game that narrating two brother&apos;s dark journey.</p>
								<div className="flex gap-2">
									<a href="https://store.steampowered.com/app/3553990/Pockets_of_Hope/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
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
