/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // 👈 tells Next.js to keep classNames stable
  },
};

module.exports = nextConfig
