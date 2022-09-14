/**
  * @type {import('next').NextConfig}
  */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   async redirects() {
//     return [
//     ]
//   },
// }

// export default nextConfig;