/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio';

const basePath = isProd ? `/${repoName}` : '';


const nextConfig = {
    output: 'export',

    basePath: basePath,

    assetPrefix: isProd ? `/${repoName}/` : undefined,

    images: {
        unoptimized: true,
    },

    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
};

export default nextConfig;