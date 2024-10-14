/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // build 시 소스코드의 console.log 자동제거
    removeConsole: {
      exclude: ['error'],
    },
  },
};

export default nextConfig;
