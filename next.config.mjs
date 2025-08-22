// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.im.ge", // ✅ allow loading images from i.im.ge
      },
    ],
  },
};

export default nextConfig;


// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["i.im.ge", "im.ge"], // ✅ allow images from im.ge
//   },
// };

// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output: 'export', // Export static HTML for GitHub Pages
//   images: { unoptimized: true },
//   // basePath: '/powerinawomantv',
//   // assetPrefix: '/powerinawomantv/',
// };

// export default nextConfig;
