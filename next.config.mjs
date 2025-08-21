// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export static HTML for GitHub Pages
  images: { unoptimized: true },
  basePath: '/powerinawomantv',
  assetPrefix: '/powerinawomantv/',
};

export default nextConfig;
