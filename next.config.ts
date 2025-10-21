/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio';

const basePath = isProd ? `/${repoName}` : '';

process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig = {
    output: 'export',

    basePath: basePath,

    assetPrefix: isProd ? `/${repoName}/` : undefined,

    images: {
        unoptimized: true,
    },
};

export default nextConfig;