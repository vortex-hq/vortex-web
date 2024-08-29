/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'c.saavncdn.com', protocol: 'https' }],
  },
};

export default nextConfig;
