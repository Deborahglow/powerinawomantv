/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export static HTML for GitHub Pages
  images: { unoptimized: true },
  basePath: '/iawaawards',
  assetPrefix: '/iawaawards/',
};

export default nextConfig;
