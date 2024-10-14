/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  compiler: {
    // build 시 소스코드의 console.log 자동제거
    removeConsole: {
      exclude: ['error'],
    },
  },
};

export default nextConfig;
