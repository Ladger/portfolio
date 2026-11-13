import Hero from './components/Hero';
import ProjectTabs from './components/ProjectTabs';
import Skills from './components/Skills';
import { projects } from './data/projects';

export default function HomePage() {
	return (
		<main>
			<Hero />
			<ProjectTabs projects={projects} />
			<Skills />
		</main>
	);
}
