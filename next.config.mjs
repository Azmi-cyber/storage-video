/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { serverComponentsExternalPackages: ["@sparticuz/chromium-min", "puppeteer-core"] },
};
export default nextConfig;
