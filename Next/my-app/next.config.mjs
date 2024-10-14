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
  // .env.local과 다르게 client, server 컴포넌트 모두에서 사용 가능
  env: {
    BASE_URL: 'HTTP://localhost:3000',
  },
  compiler: {
    // build 시 소스코드의 console.log 자동제거
    removeConsole: {
      exclude: ['error'],
    },
  },
};

export default nextConfig;
