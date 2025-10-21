'use client';

export default function AboutSection() {
    return (
        // This border provides a nice separation from the hero section
        <section className="py-12 sm:py-20 border-t border-gray-800">

            {/* Use the same max-w-4xl container for perfect alignment */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                    About Me
                </h2>

                {/* This container centers your text and matches your hero paragraph size */}
                <div className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg space-y-6">
                    <p>Hello! I’m Berk, a game developer passionate about crafting meaningful and immersive experiences. 
                        I love the process of bringing ideas to life through creativity, curiosity, and constant learning.
                    </p>
                    <p>I believe great games come from genuine care; clean code, thoughtful design, and always putting the player first. 
                        Every project is a chance to grow, experiment, and tell stories that resonate.
                    </p>
                    <p>My main focus is Unity and C#, but I’m always exploring new tools and techniques to expand my horizons. 
                        When I’m not deep in development, you’ll probably find me studying game design, tinkering with side projects, or diving into something new to spark inspiration.
                    </p>
                </div>
            </div>
        </section>
    );
}