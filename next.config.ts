/** @type {import('next').NextConfig} */

// Replace 'portfolio' with your GitHub repository name
const repoName = 'portfolio';

const nextConfig = {
    // 1. Outputs a static site in the 'out' folder
    output: 'export',

    // 2. Configures the sub-path for GitHub Pages
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,

    // 3. Required for static export with next/image
    images: {
        unoptimized: true,
    },
};

export default nextConfig;