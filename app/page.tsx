'use client';

import HeroSection from './components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import SkillsSection from './components/SkillsSection';
import CurrentProjects from './components/CurrentProjects';
import CompletedProjects from './components/CompletedProjects';
import GameJamProjects from './components/GameJamProjects';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-gray-900 pt-12">
			<HeroSection />
            <AboutSection />
			<SkillsSection />
			<CurrentProjects />
            <CompletedProjects />
            <GameJamProjects />
			<ContactSection />
		</main>
	);
}
