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
  // client & server 컴포넌트 모두
  env: {},
  compiler: {
    // build 시 소스코드의 console.log 자동제거
    removeConsole: {
      exclude: ['error'],
    },
  },
};

export default nextConfig;
