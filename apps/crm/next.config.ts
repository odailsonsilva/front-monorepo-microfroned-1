module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'http://localhost:3000/',
      },
      {
        source: '/blog/:path*',
        destination: 'http://localhost:3001/:path*',
      },
      {
        source: '/shop/:path*',
        destination: 'http://localhost:3002/:path*',
      },
    ];
  },
};
